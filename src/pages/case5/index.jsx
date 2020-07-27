import React from "react";
import Header from "../../components/header";
import pageRoute from "../pageRoute";
import Footer from "../../components/footer";
import Content from "../../components/content";
import Case5Content from "../../containers/case5Content";

const Case5Page = () => {
  return (
    <>
      <Header title="Case 5: Rabbit vs turtle race" />
      <Content>
        <Case5Content />
      </Content>
      <Footer previousLink={pageRoute.exercise3} nextLink={pageRoute.case5} />
    </>
  );
};

export default Case5Page;
