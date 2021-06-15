export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: string;
  organization: string;
}

export interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}
// 知识点:SearchPanelProps['params'] 可以获得param的类型 T[K]

export interface listProps {
  users: User[];
  list: Array<Project>;
}

export interface loginParams {
  username: string;
  password: string;
}
