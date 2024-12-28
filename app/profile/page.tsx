import React from "react";
import BlogCard from "../components/BlogCard";

const ProfilePage = () => {
  return (
    <div className="container mx-auto pb-96">
      <h1 className="text-5xl font-bold text-center my-20">Your Post</h1>
      <BlogCard />
      <p className="text-3xl text-center mt-60">ここにページネーション</p>
    </div>
  );
};

export default ProfilePage;
