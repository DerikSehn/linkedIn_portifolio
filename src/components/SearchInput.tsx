import React from "react";
import { JSX } from "react/jsx-runtime";

const SearchInput = (inputProps: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) => {

  return (
    <div className="flex items-center border rounded-md">
        <span className="absolute material-icons px-4 text-slate-900">
            search
        </span>
      <input type="text"
      placeholder="Pesquisar"
      className="h-[34px] focus:w-full md:focus:w-full  focus:border-slate-900 w-64 border-none transition-all rounded-sm bg-slate-200 duration-300 ease-out border pl-12"
      {...inputProps}
      />
    </div>
  );
};

export default SearchInput;
