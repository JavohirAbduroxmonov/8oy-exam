import { Dropdown, DropdownItem } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../store/projectSlice";
import { RiArrowDownSFill } from "react-icons/ri";

export default function DropDown() {
  const { currencyList, currency } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const customDropdownTheme = {
    arrowIcon: "ml-2 h-4 w-4",
    content: "focus:outline-none",
    floating: {
      animation: "transition-opacity",
      arrow: {
        base: "absolute z-10 h-2 w-2 rotate-45",
        style: {
          dark: "bg-gray-900 dark:bg-gray-700",
          light: "bg-white",
          auto: "bg-white dark:bg-gray-700",
        },
        placement: "-4px",
      },
      base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
      content: "py-1 text-sm text-gray-700 dark:text-gray-200",
      divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
      header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
      hidden: "invisible opacity-0",
      item: {
        container: "border border-secondary rounded",
        base: "flex w-full cursor-pointer items-center justify-start px-4 py-[2px] text-sm text-secondary hover:bg-secondary hover:text-white focus:outline-none transition-colors",
        icon: "mr-2 h-4 w-4",
      },
      style: {
        dark: "",
        light: "",
        auto: "",
      },
      target: "w-fit",
    },
    inlineWrapper: "flex items-center",
  };
  return (
    <div className="cursor-pointer z-50">
      <Dropdown
        theme={customDropdownTheme}
        label=""
        renderTrigger={() => (
          <div className="text-white flex items-center">
            <p className="font-Roboto text-base leading-5 mr-2">
              {currency.currency}
            </p>
            <RiArrowDownSFill className="mt-[-5px]" />
          </div>
        )}
        inline
      >
        {currencyList.map((item) => (
          <DropdownItem
            key={item}
            onClick={() => {
              dispatch(setCurrency(item));
            }}
          >
            {item}
          </DropdownItem>
        ))}
      </Dropdown>
    </div>
  );
}
