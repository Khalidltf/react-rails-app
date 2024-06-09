import Registration from "./auth/Registration";
import Login from "./auth/Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css";

// eslint-disable-next-line react/prop-types
function Home({ loggedInStatus, handleLogin, handleLogout }) {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const handleSuccessfulAuth = (data) => {
    handleLogin(data);
    navigate("/dashboard");
  };

  const handleLogoutClick = () => {
    axios
      .delete("http://localhost:3000/logout", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        handleLogout();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Home</h1>
      <h5>{loggedInStatus}</h5>
      <button onClick={() => handleLogoutClick()}>Logout</button>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </>
  );
}

export default Home;
