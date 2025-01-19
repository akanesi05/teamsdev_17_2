import React from "react";

const TextArea = () => {
  return (
    <div className="mt-20">
      <textarea
        placeholder="ここに本文を入力してください"
        className="w-full h-[300px] bg-[#D9D9D940] shadow-[2px_2px_10px_#00000040] p-4 text-lg rounded-3xl  text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default TextArea;
