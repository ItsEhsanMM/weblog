import Layout from "./components/layout";

import HomePage from "./components/home/HomePage";
import AuthorPage from "./components/home/author/AuthorPage";
import BlogPage from "./components/home/blog/BlogPage";

import { Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "./components/shared/ScrollToTop";

import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const cacheRtl = createCache({
   key: "muirtl",
   stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
   return (
      <Layout>
         <ScrollToTop/>
         <CacheProvider value={cacheRtl}>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/blogs/:slug" element={<BlogPage />} />
               <Route path="/authors/:slug" element={<AuthorPage />} />
               <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
         </CacheProvider>
      </Layout>
   );
}

export default App;
