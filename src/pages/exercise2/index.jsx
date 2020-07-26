import React from "react";
import Header from "../../components/header";
import Content from "../../components/content";
import Exercise2Content from "../../components/exercise2Content";
import Footer from "../../components/footer";
import pageRoute from "../pageRoute";
import Info from "../../components/info";

const Exercise2Page = () => {
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

const content = (
  <section className="normal markdown-section">
    <a href="https://redux-saga.js.org/docs/advanced/TaskCancellation.html">
      Link
    </a>
    <pre>
      <code className="lang-javascript">
        <span className="token keyword">import</span>{" "}
        <span className="token punctuation">{"{"}</span> take
        <span className="token punctuation">,</span> put
        <span className="token punctuation">,</span> call
        <span className="token punctuation">,</span> fork
        <span className="token punctuation">,</span> cancel
        <span className="token punctuation">,</span> cancelled
        <span className="token punctuation">,</span> delay{" "}
        <span className="token punctuation">{"}"}</span> from{" "}
        <span className="token string">'redux-saga/effects'</span>
        <div></div>
        <span className="token keyword">import</span>{" "}
        <span className="token punctuation">{"{"}</span> someApi
        <span className="token punctuation">,</span> actions{" "}
        <span className="token punctuation">{"}"}</span> from{" "}
        <span className="token string">'somewhere'</span>
        <div> </div>
        <span className="token keyword">function</span>
        <span className="token operator">*</span>{" "}
        <span className="token function">bgSync</span>
        <span className="token punctuation">(</span>
        <span className="token punctuation">)</span>{" "}
        <span className="token punctuation">{"{"}</span>
        <div className="indent1">
          <span className="token keyword">try</span>{" "}
          <span className="token punctuation">{"{"}</span>
        </div>
        <div className="indent2">
          <span className="token keyword">while</span>{" "}
          <span className="token punctuation">(</span>
          <span className="token keyword">true</span>
          <span className="token punctuation">)</span>{" "}
          <span className="token punctuation">{"{"}</span>
        </div>
        <div className="indent4">
          <span className="token keyword">yield</span>{" "}
          <span className="token function">put</span>
          <span className="token punctuation">(</span>actions
          <span className="token punctuation">.</span>
          <span className="token function">requestStart</span>
          <span className="token punctuation">(</span>
          <span className="token punctuation">)</span>
          <span className="token punctuation">)</span>
        </div>
        <div className="indent4">
          <span className="token keyword">const</span> result{" "}
          <span className="token operator">=</span>{" "}
          <span className="token keyword">yield</span>{" "}
          <span className="token function">call</span>
          <span className="token punctuation">(</span>someApi
          <span className="token punctuation">)</span>
        </div>
        <div className="indent4">
          <span className="token keyword">yield</span>{" "}
          <span className="token function">put</span>
          <span className="token punctuation">(</span>actions
          <span className="token punctuation">.</span>
          <span className="token function">requestSuccess</span>
          <span className="token punctuation">(</span>result
          <span className="token punctuation">)</span>
          <span className="token punctuation">)</span>
        </div>
        <div className="indent4">
          <span className="token keyword">yield</span>{" "}
          <span className="token function">delay</span>
          <span className="token punctuation">(</span>
          <span className="token number">5000</span>
          <span className="token punctuation">)</span>
        </div>
        <div className="indent3">
          <span className="token punctuation">{"}"}</span>
        </div>
        <div className="indent2">
          <span className="token punctuation">{"}"}</span>{" "}
          <span className="token keyword">finally</span>{" "}
          <span className="token punctuation">{"{"}</span>
        </div>
        <div className="indent3">
          <span className="token keyword">if</span>{" "}
          <span className="token punctuation">(</span>
          <span className="token keyword">yield</span>{" "}
          <span className="token function">cancelled</span>
          <span className="token punctuation">(</span>
          <span className="token punctuation">)</span>
          <span className="token punctuation">)</span>
        </div>
        <div className="indent4">
          <span className="token keyword">yield</span>{" "}
          <span className="token function">put</span>
          <span className="token punctuation">(</span>actions
          <span className="token punctuation">.</span>
          <span className="token function">requestFailure</span>
          <span className="token punctuation">(</span>
          <span className="token string">'Sync cancelled!'</span>
          <span className="token punctuation">)</span>
          <span className="token punctuation">)</span>
        </div>
        <div className="indent1">
          <span className="token punctuation">{"}"}</span>
        </div>
        <div>
          <span className="token punctuation">{"}"}</span>
        </div>
        <div> </div>
        <div>
          <span className="token keyword">function</span>
          <span className="token operator">*</span>{" "}
          <span className="token function">main</span>
          <span className="token punctuation">(</span>
          <span className="token punctuation">)</span>{" "}
          <span className="token punctuation">{"{"}</span>
        </div>
        <div className="indent1">
          <span className="token keyword">while</span>{" "}
          <span className="token punctuation">(</span>{" "}
          <span className="token keyword">yield</span>{" "}
          <span className="token function">take</span>
          <span className="token punctuation">(</span>START_BACKGROUND_SYNC
          <span className="token punctuation">)</span>{" "}
          <span className="token punctuation">)</span>{" "}
          <span className="token punctuation">{"{"}</span>
        </div>
        <div className="indent2">
          <span className="token comment" spellCheck="true">
            // starts the task in the background
          </span>
        </div>
        <div> </div>
        <div className="indent3">
          {" "}
          <span className="token keyword">const</span> bgSyncTask{" "}
          <span className="token operator">=</span>{" "}
          <span className="token keyword">yield</span>{" "}
          <span className="token function">fork</span>
          <span className="token punctuation">(</span>bgSync
          <span className="token punctuation">)</span>
        </div>
        <div className="indent3">
          <span className="token comment" spellCheck="true">
            // wait for the user stop action
          </span>
        </div>
        <div className="indent3">
          <span className="token keyword">yield</span>{" "}
          <span className="token function">take</span>
          <span className="token punctuation">(</span>STOP_BACKGROUND_SYNC
          <span className="token punctuation">)</span>
        </div>
        <div className="indent3">
          <span className="token comment" spellCheck="true">
            // user clicked stop. cancel the background task
          </span>
        </div>
        <div className="indent3">
          <span className="token comment" spellCheck="true">
            // this will cause the forked bgSync task to jump into its finally
            block
          </span>
        </div>
        <div className="indent3">
          <span className="token keyword">yield</span>{" "}
          <span className="token function">cancel</span>
          <span className="token punctuation">(</span>bgSyncTask
          <span className="token punctuation">)</span>
        </div>
        <div className="indent2">
          <span className="token punctuation">{"}"}</span>
        </div>
        <div>
          <span className="token punctuation">{"}"}</span>
        </div>
      </code>
    </pre>
  </section>
);
