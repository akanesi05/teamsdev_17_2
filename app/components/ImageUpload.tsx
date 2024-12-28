import React from "react";

const ImageUpload = () => {
  return (
    <div className="w-full h-[300px] border-dotted border-2 border-black rounded-3xl p-6 flex justify-center items-center mt-20">
      <label
        htmlFor="image-upload"
        className="flex items-center justify-center bg-[#18A0FB] text-white px-4 rounded-full cursor-pointer w-96 h-28 max-h-28 max-w-full text-[20px] sm:text-[33px] hover:bg-blue-300 transition duration-200"
      >
        Upload Image
        <input id="image-upload" type="file" accept="image/*" className="hidden" />
      </label>
    </div>
  );
};

export default ImageUpload;
