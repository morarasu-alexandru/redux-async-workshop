import React from "react";
import Header from "../../components/header";
import pageRoute from "../pageRoute";
import Footer from "../../components/footer";
import Content from "../../components/content";
import Case3Content from "../../containers/case3Content";

const Case5Page = () => {
  return (
    <>
      <Header title="Case 3: Redux observable api call" />
      <Content>
        <Case3Content />
      </Content>
      <Footer previousLink={pageRoute.case2} nextLink={pageRoute.case4} />
    </>
  );
};

export default Case5Page;
