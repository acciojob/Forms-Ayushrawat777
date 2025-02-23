import React from "react";

const Section1 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:");
  };

  return (
    <div className="card">
      <h2>Basic Form</h2>
      <form id="info-form" onSubmit={handleSubmit}>
        <input id="full_name" type="text" placeholder="Full Name" />
        <input id="email" type="email" placeholder="Email" />
        <input id="password" type="password" placeholder="Password" />
        <input
          id="password_confirmation"
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Section1;
