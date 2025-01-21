import { css } from "@emotion/react";

export const signUp__content = css`
  width: 100%;
`;

export const signUp__inner = css`
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

export const signUp__form = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const signUp__item = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: min(32px, 5.78%);
  width: 100%;
`;

export const signUp__lastItem = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: min(64px, 11.55%);
  width: 100%;
`;

export const signUp__title = css`
  font-family: Poppins, sans-serif;
  font-size: min(27px, 1.93rem);
  font-weight: 400;
  line-height: min(40.5px, 2.89rem);
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-bottom: min(9.47px, 1.71%);
`;

export const signUp__input = css`
  background: #e3e3e3cf;
  border: 1px solid #000000;
  border-radius: 20px;
  font-size: min(24px, 1.71rem);
  padding: min(12.18px, 2.2%);
  width: 100%;
`;

export const title = css`
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

export const signUp__btn = css`
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

export const signIn__link = css`
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

export const signIn__text = css`
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

export const fontRed = css`
  color: red;
`;
