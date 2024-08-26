import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Layout } from "antd";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout
      style={
        {
          // height: "100vh",
        }
      }
    >
      <Layout>
        <Header />
        <Content style={{ height: "100vh" }}>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
