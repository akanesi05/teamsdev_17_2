import React from "react";

type TProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TitleInput = (props: TProps) => {
  const {value , onChange} = props;
  return (
    <input
      type="text"
      placeholder="タイトル"
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
      value={value}
      onChange={onChange}
    />
  );
};

export default TitleInput;
