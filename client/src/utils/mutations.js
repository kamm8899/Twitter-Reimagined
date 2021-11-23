import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login ($email: String!, $password: String!) {
    login(password:$password, email:$email) {
      token
      user {
      password
      email
      }
    }
  }  
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!){
    addUser(username:$username, password:$password, email:$email, firstName: $firstName, lastName: $lastName) {
    token
      user {
        username
        email
        firstName
        lastName
      }
    }
  }
`;

export const ADD_POST = gql `
mutation addPost($postText: String!, $username: String!) {
    addPost(postText: $postText, username: $username) {
      _id
      postText
      createdAt
      username
      commentCount
    }
  }
`;

export const ADD_COMMENT = gql `
mutation addComment($postId: ID!, $commentBody: String!) {
	addComment(postId: $postId, commentBody: $commentBody) {
    _id
    commentCount
    comments {
      _id
      commentBody
      createdAt
      username
    }
  }
}
`;

export const REMOVE_POST = gql `
mutation removePost($_id: ID!) {
	removePost(_id: $_id) {
    _id
    
    }
  }

`




export default { LOGIN_USER, ADD_USER, ADD_POST, ADD_COMMENT, REMOVE_POST }