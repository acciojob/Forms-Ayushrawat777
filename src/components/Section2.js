import React, { useRef } from 'react'

const Section2 = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted:", nameRef.current.value, emailRef.current.value);
    };
  
    return (
      <div className="card">
        <h2>Form with useRef</h2>
        <form id="info-form" onSubmit={handleSubmit}>
          <input ref={nameRef} id="full_name" type="text" placeholder="Full Name" />
          <input ref={emailRef} id="email" type="email" placeholder="Email" />
          <input ref={passwordRef} id="password" type="password" placeholder="Password" />
          <input ref={confirmPasswordRef} id="password_confirmation" type="password" placeholder="Confirm Password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default Section2
