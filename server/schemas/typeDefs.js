const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
  }

type Comments {
  _id: ID
  commentBody: String
  createdAt: String
  username: String
}
type Auth {
  token: ID!
  user: User
}
type Query {
  me: User
  users: [User]
  user(username: String!): User
  comments(username: String): [Thought]
  comments(_id: ID!): Thought
}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addPost(thoughtText: String!): Thought
  addComment(thoughtId: ID!, reactionBody: String!): Thought
  addFriend(friendId: ID!): User
}
`;
;

module.exports = typeDefs;