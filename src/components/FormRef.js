
// FormRef.js
import React, { useRef } from "react";
import Card from "./Card";

const FormRef = () => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Name:", fullNameRef.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Password:", passwordRef.current.value);
    console.log("Password Confirmation:", passwordConfirmationRef.current.value);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">Full Name</label>
          <input ref={fullNameRef} type="text" id="full_name" className="block w-full border rounded p-2 mt-1" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input ref={emailRef} type="email" id="email" className="block w-full border rounded p-2 mt-1" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input ref={passwordRef} type="password" id="password" className="block w-full border rounded p-2 mt-1" />
        </div>
        <div>
          <label htmlFor="password_confirmation">Confirm Password</label>
          <input ref={passwordConfirmationRef} type="password" id="password_confirmation" className="block w-full border rounded p-2 mt-1" />
        </div>
        <button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 rounded">
          Submit
        </button>
      </form>
    </Card>
  );
};

export default FormRef;
