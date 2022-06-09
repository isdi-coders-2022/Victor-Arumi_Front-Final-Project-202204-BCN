import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppStyled from "./AppStyled";
import LoginControl from "./components/LoginControl/LoginControl";
import LogoutControl from "./components/LogoutControl/LogoutControl";
import NavBar from "./components/NavBar/NavBar";
import BookingsPage from "./pages/BookingsPage/BookingsPage";
import CreateBookingPage from "./pages/CreateBookingPage/CreateBookingPage";
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
          <Route
            path="/bookings/create"
            element={
              <LoginControl>
                <CreateBookingPage />
              </LoginControl>
            }
          />
          <Route
            path="/login"
            element={
              <LogoutControl>
                <LoginPage />
              </LogoutControl>
            }
          />
          <Route
            path="/register"
            element={
              <LogoutControl>
                <RegisterPage />
              </LogoutControl>
            }
          />
        </Routes>
      </AppStyled>
    </>
  );
}

export default App;
