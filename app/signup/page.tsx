"use client";

/** @jsxImportSource @emotion/react */
import Link from "next/link";
import { css } from "@emotion/react";
import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const content = css`
  width: 100%;
`;

const inner = css`
  padding: min(239px, 43.14%) min(21px, 3.79%) min(315px, 56.86%) min(24px, 4.33%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 769px) {
    width: 100%;
    max-width: 792px;
    margin: 0 auto;
  }
`;

const signUp_form = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const signUp_item = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: min(32px, 5.78%);
  width: 100%;
`;

const signUp_lastItem = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: min(64px, 11.55%);
  width: 100%;
`;

const signUp_title = css`
  font-family: Poppins, sans-serif;
  font-size: min(27px, 1.93rem);
  font-weight: 400;
  line-height: min(40.5px, 2.89rem);
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-bottom: min(9.47px, 1.71%);
`;

const signUp_input = css`
  background: #e3e3e3cf;
  border: 1px solid #000000;
  border-radius: 20px;
  font-size: min(24px, 1.71rem);
  padding: min(12.18px, 2.2%);
  width: 100%;
`;

const title = css`
  font-family: Poppins, sans-serif;
  font-size: min(40px, 2.86rem);
  font-weight: 600;
  line-height: min(60px, 4.29rem);
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  border-bottom: 4px solid #000000;
  margin-bottom: min(47px, 8.48%);
`;

const signUp_btn = css`
  background: #18a0fb;
  font-family: Poppins, sans-serif;
  font-size: min(27px, 1.93rem);
  font-weight: 600;
  line-height: min(40.5px, 2.89rem);
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  border-radius: 999px;
  padding: min(17.75px, 1.27rem) min(55.61px, 3.97rem);
  margin-bottom: min(35px, 6.32%);
`;

const signIn_link = css`
  color: #18a0fb;
  font-family: Poppins;
  font-family: Poppins;
  font-size: min(20px, 1.43rem);
  font-weight: 600;
  line-height: min(30px, 2.14rem);
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const signIn_text = css`
  color: #000000;
  font-family: Poppins;
  font-family: Poppins;
  font-size: min(20px, 1.43rem);
  font-weight: 600;
  line-height: min(30px, 2.14rem);
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const fontRed = css`
  color: red;
`;

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
    } else {
      redirectRequested = true;
    }

    if (redirectRequested) {
      router.push("/");
    }
  };

  const onChangeNameText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (name.length >= 20) {
      setIsErrorName(true)
      setErrorMessageName("名前は20文字以内で入力してください")
    } else {
      setIsErrorName(false)
    }
    setName(event.target.value);
  }

  const onChangeEmailText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (email.length >= 20) {
      setIsErrorEmail(true)
      setErrorMessageEmail("正しい書式で入力してください")
    } else {
      setIsErrorEmail(false)
    }
    setEmail(event.target.value);
  }

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (password.length >= 20) {
      setIsErrorPassword(true)
      setErrorMessagePassword("名前は20文字以内で入力してください")
    } else {
      setIsErrorPassword(false)
    }
    setPassword(event.target.value);
  }

  return (
    <div css={content}>
      <div css={inner}>
        <h1 css={title}>Sign up</h1>
        <form css={signUp_form} onSubmit={handleSignUp}>
          <div css={signUp_item}>
            <label css={signUp_title} htmlFor="name">
              Name
            </label>
            <input
              css={signUp_input}
              id="name"
              type="name"
              placeholder="Enter your name"
              value={name}
              onChange={onChangeNameText}
              required
            />
            {isErrorName && <p css={fontRed}>{errorMessageName}</p> }
          </div>
          <div css={signUp_item}>
            <label css={signUp_title} htmlFor="email">
              Email
            </label>
            <input
              css={signUp_input}
              id="email"
              type="email"
              value={email}
              placeholder="Enter your Email"
              onChange={onChangeEmailText}
              required
            />
            {isErrorEmail && <p css={fontRed}>{errorMessageEmail}</p> }
          </div>
          <div css={signUp_lastItem}>
            <label css={signUp_title} htmlFor="password">
              Password
            </label>
            <input
              css={signUp_input}
              id="password"
              type="password"
              value={password}
              placeholder="Enter your Password"
              onChange={onChangePassword}
              required
            />
            {isErrorPassword && <p css={fontRed}>{errorMessagePassword}</p> }
          </div>
          <button css={signUp_btn} type="submit">
            Sign Up
          </button>
          <p css={signIn_text}>
            Already have an account ?&nbsp;
            <Link css={signIn_link} href="/signin">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
