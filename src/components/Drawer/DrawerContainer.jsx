import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCoin } from "../../store/watchlistSlice";
import { setIsDrawerOpen } from "../../store/projectSlice";
import { useNavigate } from "react-router-dom";

export default function DrawerContainer() {
  const { watchlist } = useSelector((state) => state.watchlist);
  const reversedWatchlist = [...watchlist].reverse();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    if (watchlist.length === 0) {
      dispatch(setIsDrawerOpen(false));
    }
  }, [watchlist]);

  return (
    <ul className="grid grid-cols-2 gap-x-10 gap-y-9">
      {reversedWatchlist.length === 0 && (
        <ul>
          <li className="cols-span-2">
            <p className="text-center text-white font-Roboto">
              No coins in watchlist
            </p>
          </li>
        </ul>
      )}
      {reversedWatchlist.map((coin) => (
        <li
          key={coin.id}
          className="bg-[#14161A] pt-[17px] pb-[15px] px-[40px] rounded-[25px] text-center z-40 flex flex-col justify-between"
        >
          <img src={coin.image} alt={coin.name} className="w-[118px]" />
          <div>
            <p
              className="mt-[30px] font-Roboto text-[20px] leading-[20px] mb-[15px] text-white cursor-pointer hover:underline transition-all"
              onClick={() => {
                navigate(`/coin/${coin.id}`);
              }}
            >
              {coin.name}
            </p>
            <button
              className="py-[5px] px-4 text-xl left-5 bg-red-600 text-white"
              onClick={() => {
                dispatch(removeCoin(coin.id));
              }}
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
