'use client'
import Image from "next/image";
import { supabase } from "../utils/supabase";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState<any>([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data } = await supabase.from("posts").select("*");
    setPosts(data);
  }

  const search = async (value: string) => {
    if (value !== "") {
      const { data: posts, error } = await supabase
        .from("posts")
        .select()
        .textSearch("title", `${value}`);
      if (error) throw error;
      setPosts(posts);
      return;
    } else {
      await fetchPosts();
    }
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    search(e.target.value);
  }
  return (
    <div className="py-16">
      <div className="flex items-center justify-center mb-16">
        <input 
          type="text"
          value={keyword}
          placeholder="Search Blog Post"
          onChange={(e) => handleChange(e)}
        />
        <Image src="/images/icon_search.svg" width={41} height={39} alt="検索" />
      </div>
      <div className="my-0 mx-auto w-9/12">
        <div className="flex mb-20">
          {posts.map((post: any) => (
            <div key={post.id}>
              <Image src="/images/image_picture.png" width={467} height={304.51} alt="仮 画像" />
              <div className="flex">
                <p>{post.title}</p>
                <p>
                  <a href="#">Categroy</a>
                </p>
              </div>
              <div className="flex">
                <p>
                  <a href="#">Author</a>
                </p>
                <p>a min ago</p>
              </div>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-16">
        <div className="flex">
          <Image src="/images/icon_prevArrow.svg" width={20} height={20} alt="previous page" />
          <p>Previous Page</p>
        </div>
        <ul className="flex">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>
        <div className="flex">
          <Image src="/images/icon_nextArrow.svg" width={20} height={20} alt="next page" />
          <p>Next Page</p>
        </div>
      </div>
    </div>
  );
}
