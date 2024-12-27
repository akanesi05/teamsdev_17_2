import Image from "next/image";
import searchPic from "../public/images/icon_search.svg";
import blogPic from "../public/images/image_picture.png";
import prevArrow from "../public/images/icon_prevArrow.svg";
import nextArrow from "../public/images/icon_nextArrow.svg";

export default function Home() {
  return (
    <div className="py-16">
      <div className="flex items-center justify-center mb-16">
        <input type="text" placeholder="Search Blog Post" />
        <Image 
        src={searchPic}
        width={41}
        height={39}
        alt="検索"
        />
      </div>
      <div className="my-0 mx-auto w-9/12">
        <div className="flex mb-20">
          <div>
            <Image 
            src={blogPic}
            width={467}
            height={304.51}
            alt="仮 画像"
            />
            <div className="flex">
              <p>Post Title</p>
              <p><a href="#">Categroy</a></p>
            </div>
            <div className="flex">
              <p><a href="#">Author</a></p>
              <p>a min ago</p>
            </div>
            <p>
              test test test test test test test test test test test test<br />
              test test test test test test test test test test test test
            </p>
          </div>
          <div>
            <Image 
            src={blogPic}
            width={467}
            height={304.51}
            alt="仮 画像"
            />
            <div className="flex">
              <p>Post Title</p>
              <p><a href="#">Categroy</a></p>
            </div>
            <div className="flex">
              <p><a href="#">Author</a></p>
              <p>a min ago</p>
            </div>
            <p>
              test test test test test test test test test test test test<br />
              test test test test test test test test test test test test
            </p>
          </div>
          <div>
            <Image 
            src={blogPic}
            width={467}
            height={304.51}
            alt="仮 画像"
            />
            <div className="flex">
              <p>Post Title</p>
              <p><a href="#">Categroy</a></p>
            </div>
            <div className="flex">
              <p><a href="#">Author</a></p>
              <p>a min ago</p>
            </div>
            <p>
              test test test test test test test test test test test test<br />
              test test test test test test test test test test test test
            </p>
          </div>
        </div>
        <div className="flex mb-20">
          <div>
            <Image 
            src={blogPic}
            width={467}
            height={304.51}
            alt="仮 画像"
            />
            <div className="flex">
              <p>Post Title</p>
              <p><a href="#">Categroy</a></p>
            </div>
            <div className="flex">
              <p><a href="#">Author</a></p>
              <p>a min ago</p>
            </div>
            <p>
              test test test test test test test test test test test test<br />
              test test test test test test test test test test test test
            </p>
          </div>
          <div>
            <Image 
            src={blogPic}
            width={467}
            height={304.51}
            alt="仮 画像"
            />
            <div className="flex">
              <p>Post Title</p>
              <p><a href="#">Categroy</a></p>
            </div>
            <div className="flex">
              <p><a href="#">Author</a></p>
              <p>a min ago</p>
            </div>
            <p>
              test test test test test test test test test test test test<br />
              test test test test test test test test test test test test
            </p>
          </div>
          <div>
            <Image 
            src={blogPic}
            width={467}
            height={304.51}
            alt="仮 画像"
            />
            <div className="flex">
              <p>Post Title</p>
              <p><a href="#">Categroy</a></p>
            </div>
            <div className="flex">
              <p><a href="#">Author</a></p>
              <p>a min ago</p>
            </div>
            <p>
              test test test test test test test test test test test test<br />
              test test test test test test test test test test test test
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <Image 
            src={blogPic}
            width={467}
            height={304.51}
            alt="仮 画像"
            />
            <div className="flex">
              <p>Post Title</p>
              <p><a href="#">Categroy</a></p>
            </div>
            <div className="flex">
              <p><a href="#">Author</a></p>
              <p>a min ago</p>
            </div>
            <p>
              test test test test test test test test test test test test<br />
              test test test test test test test test test test test test
            </p>
          </div>
          <div>
            <Image 
            src={blogPic}
            width={467}
            height={304.51}
            alt="仮 画像"
            />
            <div className="flex">
              <p>Post Title</p>
              <p><a href="#">Categroy</a></p>
            </div>
            <div className="flex">
              <p><a href="#">Author</a></p>
              <p>a min ago</p>
            </div>
            <p>
              test test test test test test test test test test test test<br />
              test test test test test test test test test test test test
            </p>
          </div>
          <div>
            <Image 
            src={blogPic}
            width={467}
            height={304.51}
            alt="仮 画像"
            />
            <div className="flex">
              <p>Post Title</p>
              <p><a href="#">Categroy</a></p>
            </div>
            <div className="flex">
              <p><a href="#">Author</a></p>
              <p>a min ago</p>
            </div>
            <p>
              test test test test test test test test test test test test<br />
              test test test test test test test test test test test test
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-16">
        <div className="flex">
          <Image 
          src={prevArrow}
          width={20}
          height={20}
          alt="previous page"
          />
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
          <Image 
          src={nextArrow}
          width={20}
          height={20}
          alt="next page"
          />
          <p>Next Page</p>
        </div>
      </div>
    </div>
  );
}
