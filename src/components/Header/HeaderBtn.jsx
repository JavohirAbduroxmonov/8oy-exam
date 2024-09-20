import React from "react";
import { setIsDrawerOpen } from "../../store/projectSlice";
import { useDispatch } from "react-redux";

export default function HeaderBtn() {
  const dispatch = useDispatch();
  return (
    <button
      className="font-Roboto text-[#000000DE] hover:bg-opacity-90 transition-opacity text-sm leading-6 font-bold py-2 px-5 rounded bg-secondary"
      onClick={() => dispatch(setIsDrawerOpen(true))}
    >
      WATCH LIST
    </button>
  );
}
