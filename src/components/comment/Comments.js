import React from "react";

import { useQuery } from "@apollo/client";
import { GET_POST_COMMENT } from "../graphql/query";

import { Avatar, Box, Grid, Typography } from "@mui/material";

import Loader from "../shared/loader/Loader";

const Comments = ({ slug }) => {
   const { loading, data } = useQuery(GET_POST_COMMENT, {
      variables: { slug },
   });

   if (loading) return <Loader />;

   return (
      <Grid
         container
         mt={8}
         py={1}
         sx={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)", borderRadius: 4 }}
      >
         {data.comments.length ? (
            data.comments.map((item) => (
               <Grid
                  item
                  xs={12}
                  m={2}
                  p={1}
                  sx={{ border: "1px solid silver", bgcolor: "#f7f7f7", borderRadius: 2 }}
               >
                  <Box display={"flex"} alignItems={"center"}>
                     <Avatar>{item.name[0]}</Avatar>
                     <Typography
                        component={"p"}
                        variant="p"
                        fontSize={18}
                        ml={1}
                        color={"primary"}
                     >
                        {item.name}
                     </Typography>
                  </Box>
                  <Typography my={2} ml={4} component={"p"} variant="h5">
                     {item.comment}
                  </Typography>
               </Grid>
            ))
         ) : (
            <Grid item xs={12} my={2}>
               <Typography
                  component="h3"
                  variant="h5"
                  color="primary"
                  textAlign={"center"}
               >
                  هیچ کامنتی وجود ندارد
               </Typography>
            </Grid>
         )}
      </Grid>
   );
};

export default Comments;
