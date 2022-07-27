import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/signUp";
import LogIn from "./components/logIn";
import GuestDashboard from "./components/GuestDashboard";
import AdminDashboard from "./components/AdminDashboard"
import store from "./store"
import ViewPoll from "./components/viewPoll";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <SignUp /> } />
            <Route path="/login" element={<LogIn/>} />
            <Route path="/gdashboard" element={<GuestDashboard/>} />
            <Route path="/admindash" element={<AdminDashboard/>} />
            <Route path="/viewpoll" element={<ViewPoll/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
