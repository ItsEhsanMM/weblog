import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
   return (
      <div>
         <AppBar>
            <Toolbar>
               <Typography variant="h2" component="h5">
                  وبلاگ
               </Typography>
            </Toolbar>
         </AppBar>
      </div>
   );
};

export default Header;
