import React from "react";
import { useAuth } from "context/auth-context";
import { Form, Input, Button } from "antd";
export const LoginScreen = () => {
  const { login } = useAuth();
  // 原生做法
  // const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
  //   evt.preventDefault();
  //   const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
  //   const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;
  //   login({ username, password });
  // };

  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };
  return (
    <Form onFinish={handleSubmit}>
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
      <Button htmlType={"submit"} type={"primary"}>
        登录
      </Button>
    </Form>
  );
};
