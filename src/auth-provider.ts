import { User, loginParams } from "utils/interface";
const url = process.env.REACT_APP_API_URL;
const localStorageKey = "__auth_provider_token__";
export const getToken = () => {
  return window.localStorage.getItem(localStorageKey);
};

// user属性是User类型
export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export let login: (data: loginParams) => Promise<User | never>;
login = (data: loginParams) => {
  return fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(await response.json());
    }
  });
};

export let register: (data: loginParams) => Promise<User | never>;
register = (data: loginParams) => {
  return fetch(`${url}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(await response.json());
    }
  });
};

export const logout = async () => {
  window.localStorage.removeItem(localStorageKey);
};
