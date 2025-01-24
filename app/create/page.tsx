"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../../utils/supabase";
import TitleInput from "./components/create/TitleInput";
import { uploadStorage } from "./components/create/storage";
import ImageUpload from "./components/create/ImageUpload";
import TextArea from "./components/create/TextArea";
import CreateButton from "./components/create/CreateButton";

const CreatePage = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogImage, setBlogImage] = useState<File | null>(null);
  const handleInsertTitle = (e: React.ChangeEvent<HTMLInputElement>) => { setBlogTitle(e.target.value); }
  const handleInsertContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setBlogContent(e.target.value); }
  const handleInsertImage = (e: React.ChangeEvent<HTMLInputElement>) => { setBlogImage(e.target.files[0]); }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const imageUrl = await uploadStorage(blogImage);
    if (blogTitle === "") return;
    const {data} = await supabase.auth.getUser();
    await supabase.from("posts").insert({
      id: uuidv4(),
      user_id: "0e4d4176-0660-4e5f-8ae1-48716ac124b5",
      // user_id: data.user?.id,
      category_id: "c846a032-b069-4981-8e02-328fd7f9b9d5", // ここはこのままで良い（カテゴリ登録機能がないため）
      title: blogTitle,
      content: blogContent,
      image_path: imageUrl,
    });
    setBlogTitle("");
    setBlogContent("");
    setBlogImage(null);
  };
  return (
    <div className="container mx-auto px-4 pb-32">
      <h1 className="text-5xl font-bold text-center my-20">Create Blog </h1>
      <div className="max-w-[1580px] mx-auto px-4"></div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TitleInput
          value={blogTitle}
          onChange={handleInsertTitle}
        />
        <ImageUpload onChange={handleInsertImage}/>
        <TextArea
          value={blogContent}
          onChange={handleInsertContent}
        />
        <CreateButton/>
      </form>
    </div>
  );
};

export default CreatePage;
