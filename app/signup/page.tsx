"use client";

/** @jsxImportSource @emotion/react */
import Link from "next/link";
import { ClassNames } from "@emotion/react";
import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import {
  signUp__content,
  signUp__inner,
  title,
  signUp__form,
  signUp__item,
  signUp__title,
  signUp__input,
  fontRed,
  signUp__lastItem,
  signUp__btn,
  signIn__text,
  signIn__link,
} from "../../public/styles/signup/style";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorName, setIsErrorName] = useState<boolean>(false);
  const [isErrorEmail, setIsErrorEmail] = useState<boolean>(false);
  const [isErrorPassword, setIsErrorPassword] = useState<boolean>(false);
  const [errorMessageName, setErrorMessageName] = useState<string>("");
  const [errorMessageEmail, setErrorMessageEmail] = useState<string>("");
  const [errorMessagePassword, setErrorMessagePassword] = useState<string>("");

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();

    let redirectRequested = false;
    const data = { email, password };
    const { error } = await supabase.auth.signUp(data);
    if (error) {
      redirectRequested = false;
      throw error;
    } else {
      redirectRequested = true;
    }

    if (redirectRequested) {
      router.push("/");
    }
  };

  const onChangeNameText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (name.length >= 20) {
      setIsErrorName(true);
      setErrorMessageName("名前は20文字以内で入力してください");
    } else {
      setIsErrorName(false);
    }
    setName(event.target.value);
  };

  const onChangeEmailText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const emailStyle = /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/;
    if (!emailStyle.test(email)) {
      setIsErrorEmail(true);
      setErrorMessageEmail("正しい書式で入力してください");
    } else {
      setIsErrorEmail(false);
    }
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (password.length >= 20) {
      setIsErrorPassword(true);
      setErrorMessagePassword("名前は20文字以内で入力してください");
    } else {
      setIsErrorPassword(false);
    }
    setPassword(event.target.value);
  };

  return (
    <ClassNames>
      {({ css }) => (
        <div css={css(signUp__content)}>
          <div css={signUp__inner}>
            <h1 css={title}>Sign up</h1>
            <form css={signUp__form} onSubmit={handleSignUp}>
              <div css={signUp__item}>
                <label css={signUp__title} htmlFor="name">
                  Name
                </label>
                <input
                  css={signUp__input}
                  id="name"
                  type="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={onChangeNameText}
                  required
                />
                {isErrorName && <p css={fontRed}>{errorMessageName}</p>}
              </div>
              <div css={signUp__item}>
                <label css={signUp__title} htmlFor="email">
                  Email
                </label>
                <input
                  css={signUp__input}
                  id="email"
                  type="email"
                  value={email}
                  placeholder="Enter your Email"
                  onChange={onChangeEmailText}
                  required
                />
                {isErrorEmail && <p css={fontRed}>{errorMessageEmail}</p>}
              </div>
              <div css={signUp__lastItem}>
                <label css={signUp__title} htmlFor="password">
                  Password
                </label>
                <input
                  css={signUp__input}
                  id="password"
                  type="password"
                  value={password}
                  placeholder="Enter your Password"
                  onChange={onChangePassword}
                  required
                />
                {isErrorPassword && <p css={fontRed}>{errorMessagePassword}</p>}
              </div>
              <button css={signUp__btn} type="submit">
                Sign Up
              </button>
              <p css={signIn__text}>
                Already have an account ?&nbsp;
                <Link css={signIn__link} href="/signin">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </ClassNames>
  );
};

export default SignUp;
