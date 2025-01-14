import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className="w-full bg-red-400 text-white text-xl p-4">
        <div className="w-full max-w-full flex justify-between items-center gap-4 px-2 md:px-10">
          <img
            className="w-36 h-[50px] sm:w-44 md:w-60 lg:w-72 max-w-full object-cover"
            src="https://placehold.jp/300x50.png"
            alt="ロゴ画像"
          />
          <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-10 items-center justify-center">
            <Link href="/">
              <button>Home</button>
            </Link>
            <Link href="/create">
              <button>Create</button>
            </Link>
            <Link href="/signin">
              <button>Signin</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
