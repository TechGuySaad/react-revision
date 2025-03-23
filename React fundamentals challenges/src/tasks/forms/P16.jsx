import React, { useState } from "react";

const P16 = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form:", form);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          placeholder="first name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          placeholder="last name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="password"
          onChange={handleChange}
        />

        <button type="submit">Submit form</button>
      </form>
    </div>
  );
};

export default P16;
