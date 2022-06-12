import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppStyled from "./AppStyled";
import LoginControl from "./components/LoginControl/LoginControl";
import LogoutControl from "./components/LogoutControl/LogoutControl";
import NavBar from "./components/NavBar/NavBar";
import BookingDetailPage from "./pages/BookingDetailPage/BookingDetailPage";
import BookingsPage from "./pages/BookingsPage/BookingsPage";
import CreateBookingPage from "./pages/CreateBookingPage/CreateBookingPage";
import EditBookingPage from "./pages/EditBookingPage/EditBookingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { logInActionCreator } from "./redux/features/userSlice";
import { useAppDispatch } from "./redux/store/hooks";
import { LogInPayload } from "./types/types";

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      const userDetails: LogInPayload = jwtDecode(token as string);
      dispatch(logInActionCreator(userDetails));
    } catch (error) {}
  }, [dispatch, token]);

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
            path="/bookings/detail/:id"
            element={
              <LoginControl>
                <BookingDetailPage />
              </LoginControl>
            }
          />
          <Route
            path="/bookings/editBooking/:id"
            element={
              <LoginControl>
                <EditBookingPage />
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
