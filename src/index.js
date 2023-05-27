import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloClient, ApolloCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
   uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli67cx0o36r401t98j7rforf/master",
   cache: new ApolloCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <ApolloProvider client={client}>
      <App />
   </ApolloProvider>
);
