"use client";

import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation"; // App Routerでは 'next/navigation' を使用
import { supabase } from "../../utils/supabase";
import "../globals.css";
import { validateEmail } from "@/utils/validators";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const router = useRouter(); // ここでルーターを取得

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setErrorMessage("正しい書式で入力してください");
      setIsDisabled(true);
    } else {
      setErrorMessage("");
      setIsDisabled(false);
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length > 20) {
      setErrorMessage("パスワードは20文字以内で入力してください");
      setIsDisabled(true);
    } else {
      setErrorMessage("");
      setIsDisabled(false);
    }
  };

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("メールアドレスとパスワードを入力してください");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage("サインインに失敗しました");
    } else {
      router.push("/"); // ルーティングをクライアントサイドで処理
    }
  };

  return (
    <div className="container">
      <h1>Sign in</h1>
      <form onSubmit={handleSignIn}>
        <input type="email" placeholder="Enter your Email" value={email} onChange={handleEmailChange} />
        <p className="">{errorMessage && email && !validateEmail(email) && "正しい書式で入力してください"}</p>
        <input type="password" placeholder="Enter your Password" value={password} onChange={handlePasswordChange} />
        <p className="">{errorMessage && password.length > 20 && "パスワードは20文字以内で入力してください"}</p>
        <button type="submit" disabled={isDisabled}>
          Sign In
        </button>
        <p className="error">{errorMessage}</p>
        <h4>
          Don&apos;t have an account? <Link href="/signup">signup</Link>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
