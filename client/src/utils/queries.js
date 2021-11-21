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
    username
    postText
    comments {
      _id
      createdAt
      commentBody
    }
  }


}`