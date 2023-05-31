import React from "react";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { GET_POSTS_INFO } from "../../graphql/query";

import CardEL from "../../shared/CardEL";
import Loader from "../../shared/loader/Loader";

const Blogs = () => {
   const { data, loading, error } = useQuery(GET_POSTS_INFO);

   if (loading) return <Loader />;
   if (error) return <h1>An error ocuured</h1>;

   return (
      <div>
         <Grid container spacing={3}>
            {data.posts.map((item) => (
               <Grid xs={12} md={6} lg={4} key={item.id} item>
                  <CardEL {...item} />
               </Grid>
            ))}
         </Grid>
      </div>
   );
};

export default Blogs;
