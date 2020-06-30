import React from "react";
import Header from "../../components/header";
import pageRoute from "../pageRoute";
import Footer from "../../components/footer";
import Content from "../../components/content";
import Case1Content from "../../containers/case1Content";

const Case1Page = () => {
  return (
    <>
      <Header title="Case 1: Server call redux" />
      <Content>
        <Case1Content />
      </Content>
      <Footer previousLink={pageRoute.home} nextLink={pageRoute.case2} />
    </>
  );
};

export default Case1Page;
