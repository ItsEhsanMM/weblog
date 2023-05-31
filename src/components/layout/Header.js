import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <div>
         <AppBar position="sticky">
            <Container maxWidth="lg">
               <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                     <Typography variant="h5" component="h1" fontWeight={700}>
                        وبلاگ
                     </Typography>
                  </Link>
                  <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                     <BookIcon />
                  </Link>
               </Toolbar>
            </Container>
         </AppBar>
      </div>
   );
};

export default Header;
