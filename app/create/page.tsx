"use client";
import React, { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// supabase連携
import { supabase } from "../../utils/supabase";

// supabase 画像
import { uploadStorage } from "../components/create/storage";
// import TitleInput from "../components/create/TitleInput";
import CreateButton from "@/app/components/CreateButton";
// import ImageUpload from "../components/create/ImageUpload";
// import CreateButton from "@/app/components/CreateButton";

// types
// import { BlogProps } from "../components/types/BlogProps"
// import { BlogCategory } from "../components/types/BlogCategory"
// parts
// import TextArea from "../components/create/TextArea";
// import ImageUpload from "../components/create/ImageUpload";
// import CreateButton from "../components/create/CreateButton";
// import CreateCategory from "../components/create/CreateCategory";

const CreatePage = () => {
  // useState
  const [blogTitle, setBlogTitle] = useState("");
  // const handleInsertTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setBlogTitle(e.target.value);
  // }
  // const [blogCategory, setBlogCategory] = useState<BlogCategory>("categories");
  // const handleInsertCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setBlogCategory(e.target.value as BlogCategory);
  // }

  // 画像アップロード
  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    if (!event.target.files || event.target.files.length == 0) {
      return;
    }
    uploadStorage(event.target.files[0]);
  };
  // insert data
  // const handleSubmit = async () => {
  //   await supabase.from("posts").insert({ title: blogTitle });
  // };
  // const handleSubmit = async() => {
  //   const { error } = await supabase
  //     .from("test")
  //     .insert({ id: 1, title: blogTitle})
  //     if (error) {
  //       throw error;
  //     }
  // };

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   const { data, error } = await supabase.from("test").insert({ id: 2, title: "bbb" });
  //   if (error) {
  //     console.log(error);
  //     throw error;
  //   }
  //   console.log(data);
  //   return data;
  // };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (blogTitle === "") return;
    // const { data, error } = await supabase.from('posts').insert([
    //   { id: 1, title: 'aaa' },
    // ]);
    await supabase.from("posts").insert({
      user_id: "0e4d4176-0660-4e5f-8ae1-48716ac124b5", // TODO ログイン中のユーザーIDを指定する
      category_id: "c846a032-b069-4981-8e02-328fd7f9b9d5", // ここはこのままで良い（カテゴリ登録機能がないため）
      title: blogTitle,
      content: "CONTENT", // TODO 実際に入力された本文を指定する
      image_path: "image/path.jpg", // TODO 事前にアップロードした画像のフルパスを指定する
    });
    setBlogTitle("");
  };
  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   const { error } = await supabase.from('posts').insert([
  //     { title: blogTitle },
  //   ]);
  //   if (error) {
  //     console.error('Error inserting data:', error);
  //   } else {
  //     alert('User added successfully!');
  //     setBlogTitle("");
  //   }
  // }

  return (
    <div className="container mx-auto px-4 pb-32">
      <h1 className="text-5xl font-bold text-center my-20">Create Blog </h1>
      <div className="max-w-[1580px] mx-auto px-4"></div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* <TitleInput
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
        /> */}
        <input
          type="text"
          placeholder="タイトル"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
        />
        {/* <ImageUpload onChange={handleImageChange}/> */}
        <CreateButton />
      </form>
    </div>
  );
};

export default CreatePage;
