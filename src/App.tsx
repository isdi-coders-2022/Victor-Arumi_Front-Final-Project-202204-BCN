import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppStyled from "./AppStyled";
import LoginControl from "./components/LoginControl/LoginControl";
import NavBar from "./components/NavBar/NavBar";
import BookingsPage from "./pages/BookingsPage/BookingsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <AppStyled>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <LoginControl>
                <Navigate to="/bookings" />
              </LoginControl>
            }
          />
          <Route
            path="/bookings"
            element={
              <LoginControl>
                <BookingsPage />
              </LoginControl>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </AppStyled>
    </>
  );
}

export default App;
