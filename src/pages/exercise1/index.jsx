import React from "react";
import Header from "../../components/header";
import Content from "../../components/content";
import Footer from "../../components/footer";
import pageRoute from "../pageRoute";
import Exercise1Content from "../../components/exercise1Content";
import Info from "../../components/info";
import infoImg from "../../components/img/1/info1.png";

const Exercise1Page = () => {
  const content = <img src={infoImg} alt={"saga info"} />;

  return (
    <>
      <Header title="Exercise 1: Asynchronous counter" />
      <Info title={"Task delay"} content={content} />
      <Content>
        <Exercise1Content />
      </Content>
      <Footer previousLink={pageRoute.case3} nextLink={pageRoute.exercise2} />
    </>
  );
};

export default Exercise1Page;
