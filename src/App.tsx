import React from "react";
import "./App.css";
import AppStyled from "./AppStyled";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <>
      <AppStyled>
        <h1>PadelBookings</h1>
        <div>
          <LoginForm />
        </div>
      </AppStyled>
    </>
  );
}

export default App;
