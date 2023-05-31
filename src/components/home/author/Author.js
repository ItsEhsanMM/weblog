import React from "react";

import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/query";

import { Avatar, Divider, Grid, Typography } from "@mui/material";

import { Link } from "react-router-dom";

import Loader from "../../shared/loader/Loader";

const Author = () => {
   const { loading, data, error } = useQuery(GET_AUTHORS_INFO);

   if (loading) return <Loader />;
   if (error) return <h2>An error occured</h2>;

   const { authors } = data;
   return (
      <Grid container sx={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)", borderRadius: 4 }}>
         {authors.map((item, index) => (
            <React.Fragment key={item.id}>
               <Grid item xs={12} padding={2}>
                  <Link
                     to={`/authors/${item.slug}`}
                     style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
                  >
                     <Avatar src={item.authorPic.url} />
                     <Typography component="p" variant="p" color="text.secondary" sx={{ marginLeft: 2 }}>
                        {item.name}
                     </Typography>
                  </Link>
               </Grid>
               {index !== authors.length - 1 && (
                  <Grid xs={12} item>
                     <Divider variant="middle" />
                  </Grid>
               )}
            </React.Fragment>
         ))}
      </Grid>
   );
};

export default Author;
