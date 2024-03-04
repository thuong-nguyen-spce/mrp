import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nexPathName }) {
      const { pathname } = history.location;
      if (pathname !== nexPathName) {
        history.push(nexPathName);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev-root");

  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
