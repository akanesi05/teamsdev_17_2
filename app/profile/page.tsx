"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import Link from "next/link";
import Image from "next/image";

const ProfilePage = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const userData = await supabase.auth.getUser();
    const userId = userData.data.user?.id ?? "";
    const { data } = await supabase.from("posts").select("*").eq("user_id", userId);
    setPosts(data ?? []);
  }
  return (
    <div className="container mx-auto pb-96">
      <h1 className="text-5xl font-bold text-center my-20">Your Post</h1>
      <div className="my-0 mx-auto w-9/12">
        <div className="flex mb-20">
          {posts.map((post: any) => (
            <div key={post.id}>
              <Image src={post.image_path || "/images/image_picture.png"} width={467} height={304.51} alt="仮 画像" />
              <div className="flex">
                <p>{post.title}</p>
                <p>
                  <a href="#">Category</a>
                </p>
              </div>
              <div className="flex">
                <p>
                  <a href="#">Author</a>
                </p>
                <p>a min ago</p>
              </div>
              <p>{post.content}</p>
              <Link href={`/blog/${post.id}`}>詳細</Link>
            </div>
          ))}
        </div>
      </div>
      <p className="text-3xl text-center mt-60">ここにページネーション</p>
    </div>
  );
};

export default ProfilePage;
