const { gql } = require('apollo-server-express');

const typeDefs = gql`


type Post {
  _id: ID
  postText: String
  createdAt: String
  username: String
  commentCount: Int
  comments: [Comment]
}

type Comment {
  _id: ID
  commentBody: String
  createdAt: String
  username: String
}

type User {
  _id: ID
  username: String
  email: String
  firstName: String
  lastName: String
  posts: [Post]
  postCount: Int
}

type Query {
  me: User
  users: [User]
  user(username: String!): User
  posts(username: String): [Post]
  post(_id: ID!): Post
}

type Mutation {
  addPost(thoughtText: String!): Post
  addComment(thoughtId: ID!, reactionBody: String!): Post
  addUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): User

}
`;

// login(email: String!, password: String!): Auth

// type Auth {
//   token: ID!
//   user: User
// }


module.exports = typeDefs;