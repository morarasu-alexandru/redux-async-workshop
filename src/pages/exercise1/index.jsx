import React from "react";
import Header from "../../components/header";
import Content from "../../components/content";
import Exercise1Content from "../../components/exercise1Content";
import Footer from "../../components/footer";
import pageRoute from "../pageRoute";

const Exercise1 = () => {
  return (
    <>
      <Header title="Exercise 1: Cancelable Server call redux-saga" />
      <Content>
        <Exercise1Content />
      </Content>
      <Footer previousLink={pageRoute.case3} nextLink={pageRoute.exercise2} />
    </>
  );
};

export default Exercise1;
