// import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import { FaUserCircle } from "react-icons/fa";

const UserMenu = () => {
  const handleItemClick = (key) => {
    switch (key) {
      case "1":
        // Action for Settings
        alert("Settings is still under construction");
        break;
      case "2":
        // Action for Logout
        if (window.confirm("Are you sure you want to log out?")) {
          // Perform logout action here
          // For example, redirect to login page
          window.location.href = "/";
        }
        break;
      default:
        break;
    }
  };

  const items = [
    {
      key: "1",
      label: "Settings",
    },
    {
      key: "2",
      label: "Logout",
    },
  ];

  const menu = (
    <Menu>
      {items.map((item) => (
        <Menu.Item key={item.key} onClick={() => handleItemClick(item.key)}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button className="flex items-center justify-between space-x-3 shadow-md">
        <FaUserCircle />
        <h3>Lcpl James KO</h3>
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default UserMenu;
