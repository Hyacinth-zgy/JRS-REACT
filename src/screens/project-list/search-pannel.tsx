import React from "react";
import { SearchPanelProps } from "utils/interface";
export const SearchPannel = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <form action="">
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) => {
            setParam({
              ...param,
              name: evt.target.value,
            });
          }}
        />
        <select
          value={param.personId}
          onChange={(evt) => {
            setParam({
              ...param,
              personId: evt.target.value,
            });
          }}
        >
          <option value="">负责人</option>
          {users.map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
