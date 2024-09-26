import React, { useState } from "react";

const UserForm = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    //   console.log(e.target.name);
    //   console.log(e.target.value);
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    alert(
      `created user , ${username} with email ${email} & password ${password}`
    );
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">User Name : </label>
      <input
        id="username"
        type="text"
        name="username"
        placeholder="username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="email">Email : </label>
      <input
        type="email"
        name="email"
        placeholder="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password : </label>
      <input
        type="password"
        name="password"
        placeholder="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button>Add me to list!</button>
    </form>
  );
};

export default UserForm;
