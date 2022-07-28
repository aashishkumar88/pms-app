import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/signUp";
import LogIn from "./components/logIn";
import GuestDashboard from "./components/GuestDashboard";
import ViewPoll from "./components/viewPoll";
import CreatePoll from "./components/createPoll";
function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/gDashboard" element={<GuestDashboard />} />
            <Route path="/viewPoll" element={<ViewPoll />} />
            <Route path="/createPoll" element={<CreatePoll />} />
          </Routes>
        </BrowserRouter>
      
    </>
  );
}

export default App;
