import { Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdPersonAdd } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { IoStatsChartOutline } from "react-icons/io5";

export const SiderComponent = () => {
  const {
    token: { colorBgContainer, colorPrimary, colorBgBase },
  } = theme.useToken();

  const menuItems = [
    {
      key: "Dashboard",
      label: "Dashboard",
      style: { color: "white", border: "1px solid white" },
      icon: <LuLayoutDashboard />,
    },
    {
      key: "New Visitors",
      label: (
        <span>
          New Visitors{" "}
          <span className="white rounded-full bg-red-500 w-fit h-fit px-2">
            {23}
          </span>
        </span>
      ),
      style: { color: "white", border: "1px solid white" },
      icon: <IoMdPersonAdd />,
    },
    {
      key: "Visitors Log",
      label: "Visitors log",
      style: { color: "white", border: "1px solid white" },
      icon: <FaRegListAlt />,
    },
    {
      key: "Statistics",
      label: "Statistics",
      style: { color: "white", border: "1px solid white" },
      icon: <IoStatsChartOutline />,
    },
  ];
  return (
    <Sider
      breakpoint="md"
      collapsedWidth="0"
      theme="light"
      width={190}
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{
        background: "#007d53",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 10,
      }}
    >
      <h1 className="text-center text-5xl my-20 text-white">VMS</h1>
      <Menu
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={menuItems}
        style={{
          background: colorPrimary,
        }}
      />
    </Sider>
  );
};
