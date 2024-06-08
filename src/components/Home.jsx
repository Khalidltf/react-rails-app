import Registration from "./auth/Registration";
import Login from "./auth/Login";
import { useNavigate } from "react-router-dom";
import "./Home.css";

// eslint-disable-next-line react/prop-types
function Home({ loggedInStatus, handleLogin }) {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const handleSuccessfulAuth = (data) => {
    handleLogin(data);
    navigate("/dashboard");
  };

  return (
    <>
      <h1>Home</h1>
      <h5>{loggedInStatus}</h5>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </>
  );
}

export default Home;
