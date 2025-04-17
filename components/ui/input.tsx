// components/ui/input.tsx

import React from "react";

export const Input = ({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`px-4 py-2 border border-gray-300 rounded bg-white text-black ${className}`}
      {...props}
    />
  );
};
