import React from "react";
import Header from "../../components/header";
import Content from "../../components/content";
import Footer from "../../components/footer";
import pageRoute from "../pageRoute";
import HomeContent from "../../components/homeContent";

const HomePage = () => {
  return (
    <>
      <Header title="Homepage" />
      <Content className={"TextCenter"}>
        <HomeContent />
      </Content>
      <Footer previousLink={null} nextLink={pageRoute.case1} />
    </>
  );
};

export default HomePage;
