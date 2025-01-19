"use client"
import React from "react";
import { supabase } from "@/utils/supabase";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function BlogCard ()  {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data } = await supabase.from("posts").select("*");
    setPosts(data);
  }

  return (
    <div className="max-w-[1580px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 px-4">
      {/* START カード */}
      {posts.map((post: any) => ( <a
        href="#"
        className="block max-w-[467px] bg-white rounded-lg shadow-md overflow-hidden duration-300 hover:scale-105 hover:shadow-lg"
      >
        <img src="https://via.placeholder.com/467x300" alt="" className="w-full object-cover" />
        <div className="px-6 py-4">
          
          <div className="flex justify-between mb-2">
            <div>
              <h2 className="text-3xl font-semibold mb-2"></h2>
              <div className="flex gap-5">
                <p className="text-gray-500">Author</p>
                <p className="text-gray-500">1日前</p>
              </div>
            </div>
            <p className="text-lg">Category</p>
          </div>
          <p>ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。</p>
          
        </div>
      </a>))}
      <a
        href="#"
        className="block max-w-[467px] bg-white rounded-lg shadow-md overflow-hidden duration-300 hover:scale-105 hover:shadow-lg"
      >
        <img src="https://via.placeholder.com/467x300" alt="" className="w-full object-cover" />
        <div className="px-6 py-4">
          
          <div className="flex justify-between mb-2">
            <div>
              <h2 className="text-3xl font-semibold mb-2"></h2>
              <div className="flex gap-5">
                <p className="text-gray-500">Author</p>
                <p className="text-gray-500">1日前</p>
              </div>
            </div>
            <p className="text-lg">Category</p>
          </div>
          <p>ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。</p>
          
        </div>
      </a>
      {/* END カード */}
       <div className="flex mb-20">
      
          {posts.map((post: any) => (
            <div key={post.id}>
              <div className="flex">
                <p>{post.title}</p>
                <p>
                  <a href="#">Categroy</a>
                </p>
              </div>
              <div className="flex">
               
              </div>
              <p>{post.content}</p>
              <Link href={`/blog/${post.id}`}>詳細</Link>
            </div>
          ))}
        </div>
    </div> 
    
  );
};


