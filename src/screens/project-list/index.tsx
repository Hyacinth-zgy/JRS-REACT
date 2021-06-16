import { SearchPannel } from "./search-pannel";
import { List } from "./list";
import { useState, useEffect } from "react";
import qs from "qs";
import { cleanObject, useMount, useDebounce } from "utils/index";
import { useHttp } from "utils/http";
import React from "react";
export const ProjectListScreen = () => {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const client = useHttp();
  const debounceValue = useDebounce(param);
  useEffect(() => {
    client("projects", cleanObject(debounceValue)).then(setList);
  }, [debounceValue]);

  // 使用自定义hook
  useMount(() => {
    client("users").then(setUsers);
  });
  return (
    <div>
      <SearchPannel
        param={param}
        setParam={setParam}
        users={users}
      ></SearchPannel>
      <List list={list} users={users}></List>
    </div>
  );
};
