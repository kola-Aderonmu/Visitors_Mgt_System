import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import { FaUserCircle } from "react-icons/fa";

const items = [
  {
    key: "1",
    label: "logout",
  },
];
export const UserMenu = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <Button className="flex items-center justify-between space-x-3 shadow-md">
      <FaUserCircle />
      <h3>Lcpl James KO</h3>
      <DownOutlined />
    </Button>
  </Dropdown>
);
