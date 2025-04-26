import React from 'react'

const Button = ({ children ,type, size, state }) => {
    return <button className="block w-full text-left py-2 px-4 mt-4 bg-[#1F6B7A] rounded-md hover:bg-[#14515A]">{children}</button>;
  };

export default Button
