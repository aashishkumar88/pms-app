import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/signUp"
import store from "./store"
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <SignUp /> } />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
