import React from "react";
import { useAuth } from "context/auth-context";
import { Form, Input, Button } from "antd";
export const RegisterScreen = () => {
  const { register } = useAuth();
  // 原生的做法
  // const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
  //   evt.preventDefault();
  //   const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
  //   const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;
  //   register({ username, password });
  // };
  const handlSubmit = (values: {
    username: string;
    password: string;
    cpassword: string;
  }) => {
    register(values);
  };
  return (
    <Form onFinish={handlSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder={"密码"} type="password" id={"password"} />
      </Form.Item>
      <Form.Item
        name={"cpassword"}
        rules={[{ required: true, message: "请确认密码" }]}
      >
        <Input placeholder={"确认密码"} type="password" id={"cpassword"} />
      </Form.Item>

      <Button htmlType={"submit"} type={"primary"}>
        注册
      </Button>
    </Form>
  );
};
