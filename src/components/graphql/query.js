import { gql } from "@apollo/client";

const GET_POSTS_INFO = gql`
   query {
      posts {
         slug
         id
         title
         postPhoto {
            url
         }
         author {
            slug
            id
            name
            authorPic {
               url
            }
         }
      }
   }
`;

const GET_AUTHORS_INFO = gql`
   query {
      authors {
         id
         name
         slug
         authorPic {
            url
         }
      }
   }
`;

const GET_AUTHOR_INFO = gql`
   query getAuthorInfo($slug: String!) {
      author(where: { slug: $slug }) {
         authorPic {
            url
         }
         name
         subname
         posts {
            slug
            id
            title
            postPhoto {
               url
            }
         }
         about {
            html
         }
      }
   }
`;

const GET_POST_INFO = gql`
   query getPost($slug: String!) {
      post(where: { slug: $slug }) {
         postPhoto {
            url
         }
         title
         slug
         author {
            name
            authorPic {
               url
            }
            subname
         }
         content {
            html
         }
      }
   }
`;

const GET_POST_COMMENT = gql`
   query getComment($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
         id
         name
         comment
      }
   }
`;

export {
   GET_POSTS_INFO,
   GET_AUTHORS_INFO,
   GET_AUTHOR_INFO,
   GET_POST_INFO,
   GET_POST_COMMENT,
};
