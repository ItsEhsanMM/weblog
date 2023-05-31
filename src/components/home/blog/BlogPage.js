import React from "react";

import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";

import { GET_POST_INFO } from "../../graphql/query";

import Loader from "../../shared/loader/Loader";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";

import sanitizeHtml from "sanitize-html";
import CommentForm from "../../comment/CommentForm";
import Comments from "../../comment/Comments";

const BlogPage = () => {
   const { slug } = useParams();
   const navigate = useNavigate();

   const { loading, data, error } = useQuery(GET_POST_INFO, {
      variables: { slug },
   });

   if (loading) return <Loader />;
   if (error) return <h2>An error ocurred...</h2>;

   const { post } = data;

   return (
      <Container>
         <Grid container mt={9}>

            <Grid item xs={12} display="flex" justifyContent="space-between">
               <Typography component="h2" variant="h5" fontWeight={700} color="primary">
                  {post.title}
               </Typography>
               <ArrowBackRoundedIcon onClick={() => navigate(-1)} style={{ cursor: "pointer" }} />
            </Grid>

            <Grid item xs={12} mt={6}>
               <img src={post.postPhoto.url} width="100%" style={{ borderRadius: 20 }} alt={post.slug} />
            </Grid>

            <Grid item mt={5} display="flex" alignItems="center">
               <Avatar src={post.author.authorPic.url} sx={{ width: 80, height: 80 }} />
               <Box ml={2}>
                  <Typography component="p" variant="h5" fontWeight={700}>
                     {post.author.name}
                  </Typography>
                  <Typography component="p" variant="h6" color="text.secondary">
                     {post.author.subname}
                  </Typography>
               </Box>
            </Grid>

            <Grid item mt={6}>
               <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content.html) }}></div>
            </Grid>
         </Grid>
         <CommentForm slug={post.slug} />
         <Comments slug={post.slug} />
      </Container>
   );
};

export default BlogPage;
