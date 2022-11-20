import React from "react";

const Background = ({ children }) => {
  return (
    <body className="bg-white dark:bg-gray-900 transition-all">{children}</body>
  );
};

export default Background;
