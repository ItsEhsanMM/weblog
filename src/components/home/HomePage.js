import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Author from "./author/Author";
import Blogs from "./blog/Blogs";

const HomePage = () => {
   return (
      <div>
         <Container>
            <Grid container p={3} spacing={2}>
               <Grid item xs={12} md={3} mt={4}>
                  <Typography component="h3" variant="h5" fontWeight={700} mb={3}>
                     نویسنده ها
                  </Typography>
                  <Author />
               </Grid>
               <Grid item xs={12} md={9} mt={4}>
                  <Typography fontWeight={700} mb={3} component="h3" variant="h5">
                     مقالات
                  </Typography>
                  <Blogs />
               </Grid>
            </Grid>
         </Container>
      </div>
   );
};

export default HomePage;
