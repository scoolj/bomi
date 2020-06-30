import React from "react";
import BlogArticle from "../components/BlogArticle";
import BlogRightSidebar from "./BlogRightSideBar";
const blogSection = () => {
  return (
    <section className="blog_area section-padding">
      <div className="container">
        <div className="row">
          <BlogArticle />
          <BlogRightSidebar />
        </div>
      </div>
    </section>
  );
};

export default blogSection;
