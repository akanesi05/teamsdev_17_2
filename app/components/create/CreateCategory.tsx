import React from "react";

type TProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CreateCategory = (props: TProps) => {
  const {value , onChange} = props;
  return (
    <select
      id="countries"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      value={value}
      onChange={onChange}
    >
      <option value="categories">categories</option>
      <option value="news">news</option>
      <option value="blog">blog</option>
      <option value="other">other</option>
    </select>
  );
};

export default CreateCategory;
