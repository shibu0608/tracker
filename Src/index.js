import React from "react";
import  ReactDOM  from "react-dom";
import App from './App';
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./context/context";
import './index.css';
ReactDOM.render(
  <SpeechProvider appId="f62f927d-0728-4495-a7fa-75ef28ed0984" language="en-US">
  <Provider>
    <App/>
  </Provider>
  </SpeechProvider>,
  document.getElementById('root'));