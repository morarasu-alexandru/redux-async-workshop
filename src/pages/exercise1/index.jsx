import React from "react";
import Header from "../../components/header";
import Content from "../../components/content";
import Footer from "../../components/footer";
import pageRoute from "../pageRoute";
import Exercise1Content from "../../components/exercise1Content";
import Info from "../../components/info";

const Exercise1Page = () => {
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

const content = (
  <section className="normal markdown-section">
    <a href="https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html">
      Link
    </a>
    <h2>Delay saga effect:</h2>
    <h3 id="delayms-val">
      <code>delay(ms, [val])</code>
    </h3>
    <p>
      Returns an effect descriptor to block execution for <code>ms</code>{" "}
      milliseconds and return <code>val</code> value.
    </p>
    <h2>Delay example: </h2>
    <pre>
      <code className="lang-javascript">
        <span className="token keyword">import </span>
        <span className="token punctuation">{"{"}</span>
        {" put"}
        <span className="token punctuation">,</span>
        {" takeEvery"}
        <span className="token punctuation">,</span>
        {" delay "}
        <span className="token punctuation">{"}"}</span>
        {" from "}
        <span className="token string">'redux-saga/effects'</span>
        <div> </div>
        <div>
          <span className="token keyword">function</span>
          <span className="token operator">*</span>{" "}
          <span className="token function">incrementAsync</span>
          <span className="token punctuation">(</span>
          <span className="token punctuation">)</span>{" "}
          <span className="token punctuation">{"{"}</span>
        </div>
        <div className="indent1">
          <span className="token keyword">yield</span>{" "}
          <span className="token function">delay</span>
          <span className="token punctuation">(</span>
          <span className="token number">1000</span>
          <span className="token punctuation">)</span>
        </div>
        <div className="indent1">
          <span className="token keyword">yield</span>{" "}
          <span className="token function">put</span>
          <span className="token punctuation">(</span>
          <span className="token punctuation">{"{"}</span> type
          <span className="token punctuation">:</span>{" "}
          <span className="token string">'INCREMENT'</span>{" "}
          <span className="token punctuation">{"}"}</span>
          <span className="token punctuation">)</span>
        </div>
        <span className="token punctuation">{"}"}</span>
        <div> </div>
        <span className="token keyword">function</span>
        <span className="token operator">*</span>{" "}
        <span className="token function">watchIncrementAsync</span>
        <span className="token punctuation">(</span>
        <span className="token punctuation">)</span>{" "}
        <span className="token punctuation">{"{"}</span>
        <div className="indent1">
          <span className="token keyword">yield</span>{" "}
          <span className="token function">takeEvery</span>
          <span className="token punctuation">(</span>
          <span className="token string">'INCREMENT_ASYNC'</span>
          <span className="token punctuation">,</span> incrementAsync
          <span className="token punctuation">)</span>
        </div>
        <span className="token punctuation">{"}"}</span>
      </code>
    </pre>
  </section>
);
