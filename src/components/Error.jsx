import React from "react";

export default function Error({ error }) {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <p className="font-Montserrat text-2xl font-medium leading-5 w-80 mb-4 text-center mx-auto text-secondary">
        {error.error}
      </p>
      {error.status === 429 && (
        <p className="font-Montserrat text-2xl font-medium leading-5 w-80 mb-4 text-center mx-auto text-secondary">
          Too many requests. Please try again later.
        </p>
      )}
      <button
        className="font-Roboto text-[#000000DE]  hover:bg-opacity-90 transition-opacity text-sm leading-6 font-bold py-2 px-5 rounded bg-secondary"
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  );
}
