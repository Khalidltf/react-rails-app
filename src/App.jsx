import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("not logged in");
  const [user, setUser] = useState({});

  const handleLogin = (data) => {
    setLoggedInStatus("logged in");
    setUser(data);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home handleLogin={handleLogin} />} />
        <Route
          path="/dashboard"
          element={<Dashboard loggedInStatus={loggedInStatus} user={user} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
