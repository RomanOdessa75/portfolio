import React from "react";

const InputField = ({
  label,
  textarea = false,
}: {
  label: string;
  textarea?: boolean;
}) => {
  return (
    <div className="relative w-full">
      {textarea ? (
        <textarea
          className="peer w-full bg-transparent border-b border-[#ffffff80] focus:border-white transition-all duration-300 outline-none text-white p-2 resize-none h-32"
          placeholder=" "
        />
      ) : (
        <input
          type="text"
          className="peer w-full bg-transparent border-b border-[#ffffff80] focus:border-white transition-all duration-300 outline-none text-white p-2"
          placeholder=" "
        />
      )}
      <label
        className="absolute left-2 top-2 text-[#ffffff80] peer-placeholder-shown:top-8 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#ffffff80] 
        peer-focus:top-2 peer-focus:text-sm peer-focus:text-white transition-all duration-300"
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
