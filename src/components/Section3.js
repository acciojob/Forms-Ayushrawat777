import React, { useState } from 'react'

const Section3 = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
      };
    
      return (
        <div className="card">
          <h2>Form with useState</h2>
          <form id="form-state-link" onSubmit={handleSubmit}>
            <input name="fullName" id="full_name" type="text" placeholder="Full Name" onChange={handleChange} />
            <input name="email" id="email" type="email" placeholder="Email" onChange={handleChange} />
            <input name="password" id="password" type="password" placeholder="Password" onChange={handleChange} />
            <input name="confirmPassword" id="password_confirmation" type="password" placeholder="Confirm Password" onChange={handleChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default Section3
