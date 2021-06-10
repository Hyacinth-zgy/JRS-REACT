import { SearchPannel } from "./search-pannel";
import { List } from "./list";
import { useState, useEffect } from "react";
export const ProjectListScreen = () => {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  useEffect(() => {
    const url = process.env.REACT_APP_API_URL;
    fetch(url + "/projects").then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, []);
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
