import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store/index";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// context
// global state
// on every change in context all components were getting rerender

// redux
// state management tool
// global state
// in order for the components to be changed based on globacl state

// Store, actions, reducers

// store -  GLobal state
// reduces - functions which tell how to change state
// actions - triggers to call these changes

// var a = document.createElement("div")
// a.innerHTML = "hello sandbox"
// rootElement.appendChild(a);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// //root.render(    <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>);

// import to get a js function from another file
// export the js function for it to be imported
