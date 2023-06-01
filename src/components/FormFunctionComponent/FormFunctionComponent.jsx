import React, { useState } from "react";

const FormFunctionComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const { name, email, password } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form in Function Component</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          pattern=".{6,}"
          title="Password must be at least 6 characters long"
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormFunctionComponent;
