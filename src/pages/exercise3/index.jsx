import React from "react";
import Header from "../../components/header";
import Content from "../../components/content";
import Footer from "../../components/footer";
import pageRoute from "../pageRoute";
import Exercise3Content from "../../components/exercise3Content";
import Info from "../../components/info";
import infoImg from "../../components/img/3/info3.png";

const Exercise3Page = () => {
  const content = <img src={infoImg} alt={"saga info"} />;

  return (
    <>
      <Header title="Exercise 3: Debounce action" />
      <Info title={"Task cancellation"} content={content} />
      <Content>
        <Exercise3Content />
      </Content>
      <Footer previousLink={pageRoute.exercise2} nextLink={pageRoute.case4} />
    </>
  );
};

export default Exercise3Page;
