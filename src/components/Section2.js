import React, { useRef } from 'react';

const Section2 = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access values using refs
    console.log('Full Name:', fullNameRef.current.value);
    console.log('Email:', emailRef.current.value);
    console.log('Password:', passwordRef.current.value);
    console.log('Password Confirmation:', passwordConfirmationRef.current.value);
  };

  return (
    <div className="container">
      <h2>Section 2</h2>
      <form id="info-form" onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name:</label>
        <input type="text" id="full_name" name="full_name" ref={fullNameRef} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" ref={emailRef} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" ref={passwordRef} required />

        <label htmlFor="password_confirmation">Password Confirmation:</label>
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          ref={passwordConfirmationRef}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Section2;
