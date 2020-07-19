import React from "react";
import PaperSocket from "../../components/caseTemplate";
import rabbitRunImg from "../../components/img/4/rabbitRun.png";
import rabbitSleepImg from "../../components/img/4/rabbitSleep.png";
import turtleImg from "../../components/img/4/turtle.png";

const Case4Content = () => {
  const RabbitRunElement = <img src={rabbitRunImg} alt={"saga info"} />;
  const RabbitSleepingElement = <img src={rabbitSleepImg} alt={"saga info"} />;
  const TurtleElement = <img src={turtleImg} alt={"saga info"} />;

  return (
    <PaperSocket fullSize>
      <div className="rabbit">{RabbitRunElement}</div>
      <div className="turtle"></div>
      {RabbitSleepingElement}
      {TurtleElement}
    </PaperSocket>
  );
};

export default Case4Content;
