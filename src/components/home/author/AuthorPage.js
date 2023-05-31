import React from "react";

import sanitizeHtml from "sanitize-html";

import { useQuery } from "@apollo/client";

import { useParams } from "react-router-dom";

import { GET_AUTHOR_INFO } from "../../graphql/query";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import CardEL from "../../shared/CardEL";
import Loader from "../../shared/loader/Loader";

const AuthorPage = () => {
   const { slug } = useParams();

   const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
      variables: { slug },
   });


   if (loading) return <Loader />;
   if (error) return <h2>An error ocurred...</h2>;

   const { author } = data;

   return (
      <Container maxWidth="lg">

         <Grid container mt={10}>
            
            <Grid item xs={12} display="flex" alignItems="center" flexDirection="column">
               <Avatar src={author.authorPic.url} sx={{ width: 250, height: 250 }} />
               <Typography component="h3" variant="h5" color="text.primary" mt={4}>
                  {author.name}
               </Typography>
               <Typography component="p" variant="h5" color="text.secondary" mt={2}>
                  {author.subname}
               </Typography>
            </Grid>

            <Grid item xs={12} mt={4}>
               <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(author.about.html) }}></div>
            </Grid>
            <Grid item mt={6} xs={12}>
               <Typography component="h3" variant="h5" fontWeight={700}>
                  مقالات {author.name}
               </Typography>
            </Grid>
            <Grid container mt={2} spacing={2}>
               {author.posts.map((item) => (
                  <Grid key={item.id} item xs={12} sm={6} md={4}>
                     <CardEL title={item.title} slug={item.slug} postPhoto={item.postPhoto} />
                  </Grid>
               ))}
            </Grid>
         </Grid>
      </Container>
   );
};

export default AuthorPage;
