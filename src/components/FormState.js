
// FormState.js
import React, { useState } from "react";
import Card from "./Card";

const FormState = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            id="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className="block w-full border rounded p-2 mt-1"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full border rounded p-2 mt-1"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full border rounded p-2 mt-1"
          />
        </div>
        <div>
          <label htmlFor="password_confirmation">Confirm Password</label>
          <input
            type="password"
            id="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            className="block w-full border rounded p-2 mt-1"
          />
        </div>
        <button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 rounded">
          Submit
        </button>
      </form>
    </Card>
  );
};

export default FormState;
