import { Carousel } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";
import { addCommaToString } from "../../utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CarouselComponent() {
  const { watchlist } = useSelector((state) => state.watchlist);
  const { currency } = useSelector((state) => state.project);

  const chunkedWatchlist = (data, size) => {
    const result = [];
    for (let i = 0; i < data.length; i += size) {
      const chunk = data.slice(i, i + size);
      result.push(chunk);
    }
    return result;
  };

  const result = chunkedWatchlist(watchlist, 4);
  const customCarouselTheme = {
    root: {
      base: "relative h-full w-full",
      leftControl: "none",
      rightControl: "none",
    },
    indicators: {
      wrapper: "hidden",
    },
    item: {
      base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-full flex-shrink-0 transform cursor-default snap-center",
        on: "w-full flex-shrink-0 transform cursor-grab snap-center",
      },
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10 hidden",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      snap: "snap-x",
    },
  };
  return (
    <div className="h-[196px] py-[27px]">
      {result.length === 0 ? (
        <p className="text-center text-secondary text-4xl font-Roboto">
          No coins found
        </p>
      ) : (
        <Carousel theme={customCarouselTheme} slideInterval={2000}>
          {result.map((item, index) => (
            <div key={index} className="grid grid-cols-4">
              {item.map((coin) => (
                <motion.div
                  whileHover={{ scale: 1.05, rotateZ: 10 }}
                  whileTap={{ scale: 0.7 }}
                  key={coin.id}
                >
                  <Link
                    to={`/coin/${coin.id}`}
                    className="h-full flex flex-col items-center justify-between"
                  >
                    <img src={coin.image} alt={coin.name} className="w-20" />
                    <div className="flex flex-col items-center mt-[10px]">
                      <p className="text-white font-Roboto flex items-center gap-[7px] text-[16px] leading-[19px] uppercase">
                        {coin.symbol}
                        {""}
                        <span
                          className={`${
                            coin.price_change_percentage_24h < 0
                              ? "text-[#FF0000]"
                              : "text-[#0ECB81]"
                          } font-medium`}
                        >
                          {coin.price_change_percentage_24h < 0 ? "" : "+"}
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      </p>
                      <p className="text-white font-Roboto text-[21px] font-medium leading-[26px] flex items-center gap-[6px]">
                        <span className="text-[16px] leading-[20px]">
                          {currency.symbol}
                        </span>{" "}
                        {addCommaToString(coin.current_price, false)}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}
