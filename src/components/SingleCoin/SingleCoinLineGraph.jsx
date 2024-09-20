import { useState } from "react";
import LineGraph from "./LineGraph/LineGraph";

export default function SingleCoinLineGraph({ data }) {
  const [activePage, setActivePage] = useState("24 Hours");
  return (
    <div className="p-10">
      <div className="mb-5">
        <LineGraph coin={data} activePage={activePage} />
      </div>
      <div className="w-full flex justify-between gap-6 px-5">
        <button
          className={
            activePage === "24 Hours"
              ? "single_tab_btn_active"
              : "single_tab_btn"
          }
          onClick={() => setActivePage("24 Hours")}
        >
          24 Hours
        </button>
        <button
          className={
            activePage === "30 Days"
              ? "single_tab_btn_active"
              : "single_tab_btn"
          }
          onClick={() => setActivePage("30 Days")}
        >
          30 Days
        </button>
        <button
          className={
            activePage === "3 Months"
              ? "single_tab_btn_active"
              : "single_tab_btn"
          }
          onClick={() => setActivePage("3 Months")}
        >
          3 Months
        </button>
        <button
          className={
            activePage === "1 Year" ? "single_tab_btn_active" : "single_tab_btn"
          }
          onClick={() => setActivePage("1 Year")}
        >
          1 Year
        </button>
      </div>
    </div>
  );
}
