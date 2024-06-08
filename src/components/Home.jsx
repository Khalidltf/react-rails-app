import Registration from "./auth/Registration";
import { useNavigate } from "react-router-dom";
import "./Home.css";

// eslint-disable-next-line react/prop-types
function Home({ loggedInStatus }) {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const handleSuccessfulAuth = (data) => {
    navigate("/dashboard");
  };

  return (
    <>
      <h1>Home</h1>
      <h3>Status: {loggedInStatus}</h3>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
    </>
  );
}

export default Home;
