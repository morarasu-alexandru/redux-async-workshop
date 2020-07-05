import React from "react";
import Header from "../../components/header";
import Content from "../../components/content";
import Exercise1Content from "../../components/exercise1Content";
import Footer from "../../components/footer";
import pageRoute from "../pageRoute";
import Info from "../../components/info";
import infoImg from "../../components/img/1/info1.png";
import PaperSocket from "../../components/caseTemplate";

const Exercise1 = () => {
  const content = <img src={infoImg} alt={"info image"} />;

  return (
    <>
      <Header title="Exercise 1: Cancelable Server call redux-saga" />
      <Info title={"Task cancellation"} content={content} />
      <Content>
        <Exercise1Content />
      </Content>
      <Footer previousLink={pageRoute.case3} nextLink={pageRoute.exercise2} />
    </>
  );
};

export default Exercise1;
