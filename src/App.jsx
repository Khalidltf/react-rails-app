import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [loggedInStatus] = useState("not logged in");
  const [user] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home loggedInStatus={loggedInStatus} />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
