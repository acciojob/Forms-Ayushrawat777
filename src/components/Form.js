
// Form.js
import React from "react";
import Card from "./Card";

const Form = () => {
  return (
    <Card>
      <form id="info-form">
        <div>
          <label htmlFor="full_name">Full Name</label>
          <input type="text" id="full_name" className="block w-full border rounded p-2 mt-1" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="block w-full border rounded p-2 mt-1" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="block w-full border rounded p-2 mt-1" />
        </div>
        <div>
          <label htmlFor="password_confirmation">Confirm Password</label>
          <input type="password" id="password_confirmation" className="block w-full border rounded p-2 mt-1" />
        </div>
        <button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 rounded">
          Submit
        </button>
      </form>
    </Card>
  );
};

export default Form;
