import { useState } from "react";
import axios from "axios";
import "./Login.css";

// eslint-disable-next-line react/prop-types
function Login({ handleSuccessfulAuth }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    login_errors: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://127.0.0.1:3001/sessions",
        {
          user: {
            email: formData.email,
            password: formData.password,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.logged_in) {
          handleSuccessfulAuth(res.data);
        }
      })
      .catch((error) => console.log("error:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        value={formData.email}
        placeholder="email"
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        placeholder="password"
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
