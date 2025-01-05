'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import { Pagenation } from "../../components/Pagenation";
import { RoundButton } from "@/app/components/RoundButton";
import { supabase } from "../../../utils/supabase";

type PageProps = {
  params: {
    id: string;
    title: string;
    content: string;
    image_path: string;
  }
}

const BlogPage = ({ params }: PageProps) => {

  useEffect(() => {
    fetchPost();
  }, []);


  async function fetchPost() {
    const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('id', params?.id)
    .single();
  }

  return (
    <>
      <div className="l-wrapper">
        <div className="l-inner mx-4 my-6 sm:w-10/12 sm:max-w-7xl sm:mx-auto sm:my-14">
            <div className="p-blogCard w-full rounded-3xl mb-12 sm:py-12 sm:px-16 sm:bg-[#D9D9D991]">
              <div className="p-blogCard-head flex justify-between items-center mb-8">
                <h1 className="p-blogCard__title text-4xl sm:text-5xl">{post.title}</h1>
                <span className="p-blogCard__icon">
                  <Image
                    src="/images/icon-user.png" 
                    alt="blog Image"
                    width={96}
                    height={94}
                    className="w-14 sm:w-24"
                  />
                </span>
              </div>
              <div className="p-blogCard__img mb-8 sm:mb-12">
                <Image
                  src={post.image_path ? post.image_path : "/images/blog-sample1.png"}
                  alt="blog Image"
                  width={2395}
                  height={1237}
                  className="w-full"
                />
              </div>
              <p className="p-blogCard__text text-base leading-loose sm:text-xl">{post.content}</p>
            </div>
          {/* more post */}
          <div className="p-morePost mb-12">
            <h2 className="p-morePost__title mb-7 text-3xl sm:text-2xl">More Post</h2>
            {/* map 繰り返し */}
            <ul className="p-morePost__list grid grid-cols-1 gap-7 sm:gap-28 sm:grid-cols-3">
              <li>
                <a href="">
                  <Image
                    src="/images/blog-sample2.png"
                    alt="blog sample2"
                    width={333}
                    height={166}
                    className="w-full mb-2"
                  />
                  <p className="leading-9 font-bold text-lg">Post Title</p>
                </a>
              </li>
              <li>
                <a href="">
                  <Image
                    src="/images/blog-sample2.png"
                    alt="blog sample2"
                    width={333}
                    height={166}
                    className="w-full mb-2"
                  />
                  <p className="leading-9 font-bold text-lg">Post Title</p>
                </a>
              </li>
              <li>
                <a href="">
                  <Image
                    src="/images/blog-sample2.png"
                    alt="blog sample2"
                    width={333}
                    height={166}
                    className="w-full mb-2"
                  />
                  <p className="leading-9 font-bold text-lg">Post Title</p>
                </a>
              </li>
            </ul>
          </div>
          {/* comments */}
          <div className="p-comments max-w-[776px] m-auto">
            <h2 className="InputArea__title text-3xl mb-7">Comments</h2>
            <div className="p-comments__InputArea InputArea grid grid-cols-[auto,100px] gap-6 sm:gap-8 sm:grid-cols-[auto,172px] mb-7">
              <input
                className="rounded-md border border-solid border-[#000] text-center p-2"
                type="text"
                placeholder="your comments..."
              />
              <button className="InputArea__button w-full text-white rounded-md bg-[#18A0FB]">Comment</button>
            </div>
            <ul className="p-comments__post">
              <li className="c-userComment bg-[#C4C4C44D] rounded-md p-5 grid gap-7 grid-cols-[64px,auto] mb-7">
                <div className="c-userComment__head text-center">
                  <Image
                    src="/images/icon-user.png" //配置した画像のパスを記述する。
                    alt="blog Image"
                    width={64}
                    height={64}
                    className="mb-2"
                  />
                  <p>USER</p>
                </div>
                <div className="c-userComment__body">
                  <p className="text-lg mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit
                    amet, iaculis aliquet nunc.
                  </p>
                  <p className="text-[#18A0FB80] text-lg">a min ago</p>
                </div>
              </li>
              <li className="c-userComment bg-[#C4C4C44D] rounded-md p-5 grid gap-7 grid-cols-[64px,auto] mb-7">
                <div className="c-userComment__head text-center">
                  <Image
                    src="/images/icon-user.png" //配置した画像のパスを記述する。
                    alt="blog Image"
                    width={64}
                    height={64}
                    className="mb-2"
                  />
                  <p>USER</p>
                </div>
                <div className="c-userComment__body">
                  <p className="text-lg mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit
                    amet, iaculis aliquet nunc.
                  </p>
                  <p className="text-[#18A0FB80] text-lg">a min ago</p>
                </div>
              </li>
            </ul>
          </div>
          {/* button components */}
          <br />
          <RoundButton />
          <br />
          {/* pagenation components */}
          <Pagenation />
        </div>
      </div>
    </>
  );
}
export default BlogPage;