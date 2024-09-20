import React from "react";
import { AiFillEye } from "react-icons/ai";
import { TableRow, TableCell } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCommaToString } from "../../utils";
import { addCoin, removeCoin } from "../../store/watchlistSlice";
import { setIsDrawerOpen } from "../../store/projectSlice";

export default function CryptoCoin({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { symbol } = useSelector((state) => state.project.currency);
  const { watchlist } = useSelector((state) => state.watchlist);

  const isInWatchlist = watchlist.some((coin) => coin.id === data.id);

  const handleWatchlistToggle = () => {
    if (isInWatchlist) {
      dispatch(removeCoin(data.id));
    } else {
      dispatch(addCoin(data));
      dispatch(setIsDrawerOpen(true));
    }
  };

  return (
    <TableRow className="bg-[#16171A]">
      <TableCell className="text-left">
        <div className="flex gap-4">
          <img
            src={data.image}
            alt={data.name}
            className="w-12 cursor-pointer"
            onClick={() => navigate(`/coin/${data.id}`)}
          />
          <div>
            <p className="uppercase text-white font-roboto text-lg">
              <Link to={`/coin/${data.id}`}>{data.symbol}</Link>
            </p>
            <span className="font-roboto text-sm">
              <Link to={`/coin/${data.id}`}>{data.name}</Link>
            </span>
          </div>
        </div>
      </TableCell>

      <TableCell className="text-sm font-roboto">
        {symbol} {addCommaToString(data.current_price, false)}
      </TableCell>

      <TableCell>
        <div className="flex items-center justify-end gap-5">
          <AiFillEye
            className={`cursor-pointer ${
              isInWatchlist ? "text-[#75F94C]" : ""
            }`}
            size={25}
            onClick={handleWatchlistToggle}
          />
          <p
            className={`${
              data.price_change_percentage_24h < 0
                ? "text-red-500"
                : "text-green-500"
            } font-roboto font-medium text-sm`}
          >
            {data.price_change_percentage_24h > 0 ? "+" : ""}
            {data.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      </TableCell>

      <TableCell className="text-sm font-roboto">
        {symbol} {addCommaToString(data.market_cap, true)}
      </TableCell>
    </TableRow>
  );
}
