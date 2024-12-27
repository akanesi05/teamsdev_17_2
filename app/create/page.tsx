import React from "react";
import TextArea from "../components/TextArea";
import TitleInput from "../components/TitleInput";
import ImageUpload from "../components/ImageUpload";
import CreateButton from "../components/CreateButton";

const CreatePage = () => {
  return (
    <div className="container mx-auto px-4 pb-32">
      <h1 className="text-5xl font-bold text-center my-20">Create Blog </h1>
      <div className="max-w-[1580px] mx-auto px-4"></div>
      <TitleInput />
      <ImageUpload />
      <TextArea />
      <CreateButton />
    </div>
  );
};

export default CreatePage;
