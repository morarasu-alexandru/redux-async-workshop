import React from "react";
import Header from "../../components/header";
import Content from "../../components/content";
import Exercise2Content from "../../components/exercise2Content";
import Footer from "../../components/footer";
import pageRoute from "../pageRoute";
import Info from "../../components/info";
import infoImg from "../../components/img/2/info2.png";

const Exercise2Page = () => {
  const content = <img src={infoImg} alt={"saga info"} />;

  return (
    <>
      <Header title="Exercise 2: Cancelable Server call redux-saga" />
      <Info title={"Task cancellation"} content={content} />
      <Content>
        <Exercise2Content />
      </Content>
      <Footer
        previousLink={pageRoute.exercise1}
        nextLink={pageRoute.exercise3}
      />
    </>
  );
};

export default Exercise2Page;
