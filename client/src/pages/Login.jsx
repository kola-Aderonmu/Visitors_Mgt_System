import React from "react";
import { Button, Form, Input, Layout, Select } from "antd";
import { Link } from "react-router-dom";

// Define a function 'onFinish' to handle successful form submission
const onFinish = (values) => {
  console.log("Success:", values);
};

// Define a function 'onFinishFailed' to handle failed form submission
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

// Define the 'Login' component
export const Login = () => {
  // Return a React Form component
  return (
    <Layout.Content className="h-screen w-screen flex flex-col space-x-5 justify-center items-center bg-[#F9FFFD]">
      <h1>Visitors Management System</h1>

      <h2>Login</h2>
      <Form
        className="shadow-md p-10 bg-white rounded-md"
        name="Login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 14,
        }}
      >
        {/* Personels name and initials*/}
        <Form.Item
          label="Name and Initials"
          name="Name and Initials"
          rules={[
            {
              required: true,
              message: "Please input your Name and Initials",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Personnels Rank */}
        <Form.Item
          label="Rank"
          name="rank"
          rules={[
            {
              required: true,
              message: "Please input your rank",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Svc Number */}
        <Form.Item
          label="Service Number"
          name="svc number"
          rules={[
            {
              required: true,
              message: "Please input your Service number",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Airpolice passcode*/}
        <Form.Item
          label="Military Police passcode"
          name="Military Police passcode"
          rules={[
            {
              required: true,
              message: "Please input the military police passcode",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* Define a form item for the submit button */}
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Link to="/dashboard">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </Layout.Content>
  );
};
