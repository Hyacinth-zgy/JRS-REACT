import { SearchPannel } from "./search-pannel";
import { List } from "./list";
import { useState, useEffect } from "react";
import qs from "qs";
import { cleanObject, useMount, useDebounce } from "utils/index";
import React from "react";
export const ProjectListScreen = () => {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceValue = useDebounce(param);
  useEffect(() => {
    const url = process.env.REACT_APP_API_URL;
    fetch(url + `/projects?${qs.stringify(cleanObject(debounceValue))}`).then(
      async (res) => {
        if (res.ok) {
          setList(await res.json());
        }
      }
    );
  }, [debounceValue]);

  // 使用自定义hook
  useMount(() => {
    const url = process.env.REACT_APP_API_URL;
    fetch(url + "/users").then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
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
