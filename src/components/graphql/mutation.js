import { gql } from "@apollo/client";

const POST_COMMENT = gql`
   mutation postComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
   ) {
      createComment(
         data: {
            name: $name
            email: $email
            comment: $comment
            post: { connect: { slug: $slug } }
         }
      ){
        id
      }
   }
`;

export { POST_COMMENT };
