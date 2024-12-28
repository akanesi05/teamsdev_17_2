import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div>
      <h1>Sign up</h1>
      <form>
        <input type="name" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your Email" />
        <input type="password" placeholder="Enter your Password" />
        <button>Sign Up</button>

        <Link href="/signin">signin</Link>
      </form>
    </div>
  );
};

export default SignUp;
