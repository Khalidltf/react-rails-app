import Registration from "./auth/Registration";
import { useNavigate } from "react-router-dom";
import "./Home.css";

// eslint-disable-next-line react/prop-types
function Home({ handleLogin }) {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const handleSuccessfulAuth = (data) => {
    handleLogin(data);
    navigate("/dashboard");
  };

  return (
    <>
      <h1>Home</h1>

      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
    </>
  );
}

export default Home;
