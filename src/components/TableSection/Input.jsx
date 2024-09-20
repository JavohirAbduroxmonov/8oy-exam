import { FloatingLabel } from "flowbite-react";
import React from "react";

export default function Input({ search, setSearch }) {
  const customInputTheme = {
    input: {
      default: {
        outlined: {
          md: "peer block w-full appearance-none rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white",
        },
      },
    },
    label: {
      default: {
        outlined: {
          md: "absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-500 dark:bg-gray-800 dark:text-gray-400",
        },
      },
    },
    helperText: {
      default: "mt-2 text-xs text-gray-500 dark:text-gray-400",
    },
  };

  return (
    <div className="mb-5">
      <FloatingLabel
        theme={customInputTheme}
        variant="outlined"
        label="Search For a Cryptocurrency..."
        size="md"
        value={search}
        autoComplete="off"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
