import React from "react";
import { Badge, Card, Col, Layout, Menu, Row, theme } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;
import { Searchbar } from "../components/Ui/Searchbar";
import UserMenu from "../components/UserMenu";
import { DashboardCard } from "../components/DashboardCard";
import { SiderComponent } from "../components/SiderComponent";

export const Dashboard = () => {
  const {
    token: { colorBgContainer, colorPrimary, colorBgBase },
  } = theme.useToken();

  const handleCardClick = (title) => {
    alert(`"${title}" is still under construction`);
  };

  return (
    <div>
      <Layout hasSider>
        <SiderComponent />
        <Layout
          style={{
            marginLeft: 180,
          }}
        >
          <Header
            style={{
              background: colorBgBase,
              position: "fixed",
              top: 0,
              width: "90%",
            }}
            className="flex items-center justify-between shadow-md"
          >
            <Searchbar />
            <UserMenu />
          </Header>
          <Content
            style={{
              margin: "24px 16px 0",
            }}
            className="min-h-[96vh]"
          >
            <h1 className="text-center mt-20">
              Armed Forces Complex Visitors Management System{" "}
            </h1>
            <Row
              className="p-20"
              gutter={16}
              justify="space-around"
              align={"middle"}
            >
              <Col md={12} lg={8} xl={6}>
                <Link to="/details/defence" target="_blank">
                  <DashboardCard
                    key={"Defence HQ"}
                    imageSrc={
                      "https://defence.gov.ng/wp-content/uploads/2020/11/dhq_logo.png"
                    }
                    title={"Defence HQ"}
                    visitorsCount={6}
                    onClick={() => handleCardClick("Defence HQ")}
                  />
                </Link>
              </Col>

              <Col md={12} lg={8} xl={6}>
                <Link to="/details/army" target="_blank">
                  <DashboardCard
                    key={"Army HQ"}
                    imageSrc={
                      "https://defence.gov.ng/wp-content/uploads/2020/11/army_logo-1.png"
                    }
                    title={"Army HQ"}
                    visitorsCount={12}
                    onClick={() => handleCardClick("Army HQ")}
                  />
                </Link>
              </Col>
              <Col md={12} lg={8} xl={6}>
                <Link to="/details/navy" target="_blank">
                  <DashboardCard
                    key={"Naval HQ"}
                    imageSrc={
                      "https://defence.gov.ng/wp-content/uploads/2020/11/navy_logo-1.png"
                    }
                    title={"Naval HQ"}
                    visitorsCount={10}
                    onClick={() => handleCardClick("Naval HQ")}
                  />
                </Link>
              </Col>
              {/* air force section */}
              <Col md={12} lg={8} xl={6}>
                <Link to="/details/naf" target="_blank">
                  <DashboardCard
                    key={"Air Force HQ"}
                    imageSrc={
                      "https://defence.gov.ng/wp-content/uploads/2020/11/air_force.png"
                    }
                    title={"Air Force HQ"}
                    visitorsCount={1}
                  />
                </Link>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
