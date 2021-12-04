import React from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Theme from "./Components/Theme";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const themeColor = useSelector((state) => state.theme.value);
  return (
    <div className="App" style={{ color: themeColor }}>
      <Profile />
      <Login />
      <Theme />
    </div>
  );
}

export default App;
