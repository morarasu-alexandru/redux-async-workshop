import React from "react";
import Header from "../../components/header";
import Content from "../../components/content";
import Footer from "../../components/footer";
import pageRoute from "../pageRoute";
import Exercise3Content from "../../components/exercise3Content";
import Info from "../../components/info";

const Exercise3Page = () => {
  return (
    <>
      <Header title="Exercise 3: Debounce action" />
      <Info title={"Task cancellation"} content={content} />
      <Content>
        <Exercise3Content />
      </Content>
      <Footer previousLink={pageRoute.exercise2} nextLink={pageRoute.case5} />
    </>
  );
};

export default Exercise3Page;

const content = (
  <section className="normal markdown-section">
    <a href="https://redux-saga.js.org/docs/api/#debouncems-pattern-saga-args">
      Link
    </a>
    <pre>
      <code className="lang-javascript">
        <div>
          <span className="token keyword">import</span>{" "}
          <span className="token punctuation">{"{"}</span> call
          <span className="token punctuation">,</span> put
          <span className="token punctuation">,</span> debounce{" "}
          <span className="token punctuation">{"}"}</span> from `redux
          <span className="token operator">-</span>saga
          <span className="token operator">/</span>effects`
        </div>
        <div> </div>
        <div>
          <span className="token keyword">function</span>
          <span className="token operator">*</span>{" "}
          <span className="token function">fetchAutocomplete</span>
          <span className="token punctuation">(</span>action
          <span className="token punctuation">)</span>{" "}
          <span className="token punctuation">{"{"}</span>
        </div>
        <div className="indent1">
          <span className="token keyword">const</span> autocompleteProposals{" "}
          <span className="token operator">=</span>{" "}
          <span className="token keyword">yield</span>{" "}
          <span className="token function">call</span>
          <span className="token punctuation">(</span>Api
          <span className="token punctuation">.</span>fetchAutocomplete
          <span className="token punctuation">,</span> action
          <span className="token punctuation">.</span>text
          <span className="token punctuation">)</span>
        </div>
        <div className="indent1">
          <span className="token keyword">yield</span>{" "}
          <span className="token function">put</span>
          <span className="token punctuation">(</span>
          <span className="token punctuation">{"{"}</span>type
          <span className="token punctuation">:</span>{" "}
          <span className="token string">'FETCHED_AUTOCOMPLETE_PROPOSALS'</span>
          <span className="token punctuation">,</span> proposals
          <span className="token punctuation">:</span> autocompleteProposals
          <span className="token punctuation">{"}"}</span>
          <span className="token punctuation">)</span>
        </div>
        <div>
          <span className="token punctuation">{"}"}</span>
        </div>
        <div> </div>
        <div>
          <span className="token keyword">function</span>
          <span className="token operator">*</span>{" "}
          <span className="token function">debounceAutocomplete</span>
          <span className="token punctuation">(</span>
          <span className="token punctuation">)</span>{" "}
          <span className="token punctuation">{"{"}</span>
        </div>
        <div className="indent1">
          {" "}
          <span className="token keyword">yield</span>{" "}
          <span className="token function">debounce</span>
          <span className="token punctuation">(</span>
          <span className="token number">1000</span>
          <span className="token punctuation">,</span>{" "}
          <span className="token string">'FETCH_AUTOCOMPLETE'</span>
          <span className="token punctuation">,</span> fetchAutocomplete
          <span className="token punctuation">)</span>
        </div>

        <div>
          {" "}
          <span className="token punctuation">{"}"}</span>{" "}
        </div>
      </code>
    </pre>
  </section>
);
