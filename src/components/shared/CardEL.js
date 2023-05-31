import React from "react";
import {
   Avatar,
   Button,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   CardMedia,
   Divider,
   Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CardEL = ({ title, postPhoto, slug, author }) => {
   return (
      <Card sx={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)", borderRadius: 4 }}>
         {author && (
            <CardHeader
               avatar={<Avatar sx={{ marginLeft: 2 }} src={author.authorPic.url} alt={author.slug} />}
               title={
                  <Typography component="p" variant="p" color="text.secondary">
                     {author.name}
                  </Typography>
               }
            />
         )}
         <CardMedia component="img" src={postPhoto.url} height="194" alt={slug} />
         <CardContent sx={{ minHeight: "70px" }}>
            <Typography component="h3" variant="h6" color="text-primary" fontWeight={600}>
               {title}
            </Typography>
         </CardContent>
         <Divider variant="middle" sx={{ margin: "10px" }} />
         <CardActions sx={{ marginBottom: 1 }}>
            <Link to={`/blogs/${slug}`} style={{ width: "100%" }}>
               <Button variant="outlined" size="small" sx={{ width: "100%", borderRadius: 3 }}>
                  <Typography component="p" variant="p" textAlign="center">
                     مطالعه مقاله
                  </Typography>
               </Button>
            </Link>
         </CardActions>
      </Card>
   );
};

export default CardEL;
