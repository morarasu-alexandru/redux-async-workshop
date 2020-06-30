import React from "react";
import Header from "../../components/header";
import pageRoute from "../pageRoute";
import Footer from "../../components/footer";
import Content from "../../components/content";
import Case3Content from "../../containers/case3Content";

const Case3Page = () => {
  return (
    <>
      <Header title="Case 3: Server call redux-saga" />
      <Content>
        <Case3Content />
      </Content>
      <Footer previousLink={pageRoute.case2} nextLink={pageRoute.exercise1} />
    </>
  );
};

export default Case3Page;
