import React from "react";
import Header from "../../components/header";
import pageRoute from "../pageRoute";
import Footer from "../../components/footer";
import Content from "../../components/content";
import Case4Content from "../../containers/case4Content";

const Case4Page = () => {
  return (
    <>
      <Header title="Case 4: Server call redux-saga" />
      <Content>
        <Case4Content />
      </Content>
      <Footer previousLink={pageRoute.case3} nextLink={pageRoute.exercise1} />
    </>
  );
};

export default Case4Page;
