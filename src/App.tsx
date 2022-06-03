import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppStyled from "./AppStyled";
import ClubsPage from "./pages/ClubsPage/ClubsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <AppStyled>
        <h1 className="text-3xl font-bold underline">PadelBookings</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/clubs" />} />
          <Route path="/clubs" element={<ClubsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </AppStyled>
    </>
  );
}

export default App;
