import { SearchPannel } from "./search-pannel";
import { List } from "./list";
import { useState, useEffect } from "react";
import qs from "qs";
import { cleanObject } from "utils/index";
export const ProjectListScreen = () => {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  useEffect(() => {
    const url = process.env.REACT_APP_API_URL;
    fetch(url + `/projects?${qs.stringify(cleanObject(param))}`).then(
      async (res) => {
        if (res.ok) {
          setList(await res.json());
        }
      }
    );
  }, [param]);
  useEffect(() => {
    const url = process.env.REACT_APP_API_URL;
    fetch(url + "/users").then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }, []);
  useEffect(() => {
    console.log(param);
  }, [param]);
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
