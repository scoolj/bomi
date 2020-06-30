import React from "react";
import SinglePost from "../components/SinglePost";
import NavigationTop from "../components/NavigationTop";
import BlogAuthor from "../components/BlogAuthor";
import CommentArea from "../components/CommentArea";
import SinglePost from "../components/SinglePost";
import CommentForm from "../components/CommentForm";
import BlogRightSideBar from "../components/BlogRightSideBar";

const singlePostSection = () => {
  return (
    <section class="blog_area single-post-area section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 posts-list">
            <SinglePost />
            <NavigationTop />
            <BlogAuthor />
            <CommentArea />
            <CommentForm />
            <BlogRightSideBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default singlePostSection;
