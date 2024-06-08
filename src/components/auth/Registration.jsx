import { useState } from "react";
import axios from "axios";
import "./Registration.css";

// eslint-disable-next-line react/prop-types
function Registration({ handleSuccessfulAuth }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    registration_errors: "",
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
    console.log("form submitted ...");
    axios
      .post(
        "http://127.0.0.1:3000/registrations",
        {
          user: {
            email: formData.email,
            password: formData.password,
            password_confirmation: formData.password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status === "created") {
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
      <input
        name="password_confirmation"
        type="password"
        value={formData.password_confirmation}
        placeholder="password confirmation"
        onChange={handleChange}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Registration;
