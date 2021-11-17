const { User, Post } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await userData
                    .findOne({ _id: context.user._id })
                    .select("-__V -password")
                    .populate("posts")
                    .populate("comments");

                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },

        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
        },

        post: async (parent, { _id }) => {
            return Post.findOne({ _id });
        },

        users: async () => {
            return User.find()
                .select("-__v -password")
                .populate("posts");
        },

        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select("-__v -password")
                .populate("posts");
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
          
            return { token, user };
          },
        //   login: async (parent, { email, password }) => {
        //     const user = await User.findOne({ email });
          
        //     if (!user) {
        //       throw new AuthenticationError('Incorrect credentials');
        //     }
          
        //     const correctPw = await user.isCorrectPassword(password);
          
        //     if (!correctPw) {
        //       throw new AuthenticationError('Incorrect credentials');
        //     }
          
        //     const token = signToken(user);
        //     return { token, user };
        //   },

        addPost: async (parent, args, context) => {
            console.log(context);
            if (context.user) {
                const post = await Post.create(args);

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { posts: post._id } },
                    { new: true }
                );

                return post;
            }

            // throw authentication error here
        },

        addComment: async (parent, { postId, commentBody }, context) => {
            if (context.user) {
                const updatedPost = await Post.findOneAndUpdate(
                    { _id: postId },
                    { $push: { comments: { commentBody, username: context.user.username } } },
                    { new: true, runValidators: true }
                );

                return updatedPost;
            }

            // throw throw authentication error here
        },
    },
};

module.exports = resolvers;
