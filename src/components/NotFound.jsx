import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="text-white max-w-[1280px] mx-auto mt-24">
      <div className="flex flex-col items-center">
        <h1 className="font-Montserrat font-semibold text-center text-[164px] leading-tight text-secondary">
          404
        </h1>
        <p className="font-Montserrat text-xl font-medium leading-5 w-80 mb-16 text-center mt-[-8px] mx-auto text-fontColor">
          The page you are looking for doesn't exist
        </p>
        <button className="font-Roboto text-[#000000DE]  hover:bg-opacity-90 transition-opacity text-sm leading-6 font-bold py-2 px-5 rounded bg-secondary" onClick={() =>  navigate("/", { replace: true })}>
          Go Home
        </button>
      </div>
    </div>
  );
}
