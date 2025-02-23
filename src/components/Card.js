// Card.js
import React from "react";

const Card = ({ children }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg max-w-md mx-auto">
      {children}
    </div>
  );
};

export default Card;
