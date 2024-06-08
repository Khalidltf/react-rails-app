import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("not_logged_in");
  const [user, setUser] = useState({});
  const handleLogin = (data) => {
    setLoggedInStatus("logged_in");
    setUser(data);
  };

  function checkLoginStatus() {
    axios
      .get("http://127.0.0.1:3000/logged_in", { withCredentials: true })
      .then((res) => {
        console.log("Logged in? ", res.data);
        if (res.data.logged_in && loggedInStatus === "not_logged_in") {
          setLoggedInStatus("logged_in");
          setUser(res.data);
        } else if (!res.data.logged_in && loggedInStatus === "logged_in") {
          setLoggedInStatus("not_logged_in");
          setUser({});
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home loggedInStatus={loggedInStatus} handleLogin={handleLogin} />
          }
        />
        <Route
          path="/dashboard"
          element={<Dashboard loggedInStatus={loggedInStatus} user={user} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
