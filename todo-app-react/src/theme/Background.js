import React from "react";

const Background = ({ children }) => {
  return (
    <body className="bg-very-light-gray dark:bg-very-dark-blue transition-all min-h-screen">
      {children}
    </body>
  );
};

export default Background;
