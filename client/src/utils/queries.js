import { gql } from '@apollo/client';

export const GET_ME = gql
  `

     {
        me {
          _id
          username
         email
          firstName
          lastName
          password
          postCount
          posts {
            _id
            postText
            commentCount
            comments {
              _id
              createdAt
              commentBody
            }
          }
        }
      }`;
export const ALL_POST = gql
  `
{
    allPost{
      _id
      username
      postText
      commentCount
      comments {
        _id
        commentBody
        username
        createdAt
    }  
  }
}`

export const ALL_USERS = gql
  `
{
  query {
    users {
      _id
      username
      email
      firstName
      lastName
      password
      postCount
      posts {
        _id
        commentCount
        comments {
          _id
          createdAt
          commentBody
        }
      }
    }
  }
}`