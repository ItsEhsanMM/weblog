import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";

import "./styles/index.css";
import "./styles/fonts.css";

import { BrowserRouter } from "react-router-dom";
 
const client = new ApolloClient({
   uri: process.env.REACT_APP_GRAPHCMS_URI,
   cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>

         <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
               <App />
            </ThemeProvider>
         </ApolloProvider>
   </BrowserRouter>
);
