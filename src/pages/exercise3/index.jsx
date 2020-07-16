import React from "react";
import Header from "../../components/header";
import Content from "../../components/content";
import Footer from "../../components/footer";
import pageRoute from "../pageRoute";
import Exercise3Content from "../../components/exercise3Content";

const Exercise3Page = () => {
  return (
    <>
      <Header title="Exercise3: Debounce action" />
      <Content>
        <Exercise3Content />
      </Content>
      <Footer previousLink={pageRoute.exercise2} nextLink={pageRoute.case4} />
    </>
  );
};

export default Exercise3Page;
