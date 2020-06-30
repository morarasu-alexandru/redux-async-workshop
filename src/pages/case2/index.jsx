import React from "react";
import Header from "../../components/header";
import pageRoute from "../pageRoute";
import Footer from "../../components/footer";
import Content from "../../components/content";
import Case2Content from "../../containers/case2Content";

const Case2Page = () => {
  return (
    <>
      <Header title="Case 2: Server call redux-thunk" />
      <Content>
        <Case2Content />
      </Content>
      <Footer previousLink={pageRoute.case1} nextLink={pageRoute.case3} />
    </>
  );
};

export default Case2Page;
