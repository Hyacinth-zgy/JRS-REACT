import React from "react";
import { cleanObject } from "utils";
import qs from "qs";
import { loginParams } from "utils/interface";
const url = process.env.REACT_APP_API_URL;
export const LoginScreen = () => {
  const login = (params: loginParams) => {
    fetch(url + `/login?${qs.stringify(cleanObject(params))}`).then();
  };
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input type="text" id="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  );
};
