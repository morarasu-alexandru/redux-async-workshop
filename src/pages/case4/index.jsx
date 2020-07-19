import React from "react";
import Header from "../../components/header";
import pageRoute from "../pageRoute";
import Footer from "../../components/footer";
import Content from "../../components/content";
import Case4Content from "../../containers/case4Content";

const Case4Page = () => {
  return (
    <>
      <Header title="Case 4: Rabbit vs turtle race" />
      <Content>
        <Case4Content />
      </Content>
      <Footer previousLink={pageRoute.exercise3} nextLink={pageRoute.case5} />
    </>
  );
};

export default Case4Page;
