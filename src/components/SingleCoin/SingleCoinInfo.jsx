import React from "react";
import { addCommaToString, getDataByCurrency } from "../../utils";
import { useSelector } from "react-redux";

export default function SingleCoinInfo({ data }) {
  const { currency } = useSelector((state) => state.project);

  const currentPrice = getDataByCurrency(
    data?.market_data?.current_price,
    currency.currency
  );
  const marketCap = getDataByCurrency(
    data?.market_data.market_cap,
    currency.currency
  );
  return (
    <>
      <div className="flex flex-col items-center mb-6">
        <img src={data?.image?.large} alt={data?.name} className="w-[200px]" />
        <h2 className="mt-5 font-Montserrat text-5xl font-bold leading-tight text-white">
          {data?.name}
        </h2>
      </div>
      <p className="text-white text-sm mb-[30px] font-Montserrat outline-none">
        {data?.description?.en.slice(0, 100)}...
      </p>
      <ul className="flex flex-col gap-5">
        <li>
          <p className="ranking_stats">
            Rank:{" "}
            <span className="font-normal text-[20px] text-fontColor">
              {data?.market_cap_rank}
            </span>
          </p>
        </li>
        <li>
          <p className="ranking_stats">
            Current Price:{" "}
            <span className="font-normal text-[20px] text-fontColor">
              {currency.symbol} {addCommaToString(currentPrice, false)}
            </span>
          </p>
        </li>
        <li>
          <p className="ranking_stats">
            Market Cap:{" "}
            <span className="font-normal text-[20px] text-fontColor">
              {currency.symbol} {addCommaToString(marketCap, true)}
            </span>
          </p>
        </li>
      </ul>
    </>
  );
}
