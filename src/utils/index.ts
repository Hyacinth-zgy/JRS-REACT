import { useEffect, useState } from "react";

export const isVoid = (value: any) =>
  value === undefined || value === null || value === "";

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isVoid(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callBack: () => void) => {
  useEffect(() => {
    callBack();
  }, []);
};

// 使用了这里useEffect得到了value依赖后就会一直做处理
export const useDebounce = (value: any, delay = 300) => {
  const [params, setParams] = useState(value);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setParams(value);
    }, delay);
    return () => {
      clearTimeout(timeId);
    };
  }, [value, delay]);
  return params;
};
