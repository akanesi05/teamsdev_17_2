import Link from "next/link";
import React from "react";
import "../globals.css";

const SignIn = () => {
  return (
    <div className="container">
      <h1>Sign in</h1>
      <form>
        <input type="email" placeholder="Enter your Email" />
        <input type="password" placeholder="Enter your Password" />
        <button>Sign In</button>
        <h4>
          Don&apos;t have an account? <Link href="/signup">signup</Link>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
