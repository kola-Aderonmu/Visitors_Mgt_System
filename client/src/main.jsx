import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider, theme } from "antd";
const { defaultAlgorithm } = theme;
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#007d53",
            colorInfo: "#007d53",
            colorBgBase: "#f9fffd",
            colorTextBase: "#00281a",
          },
          algorithm: [defaultAlgorithm],
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
