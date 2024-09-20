import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { setIsDrawerOpen } from "../store/projectSlice";
import { useDispatch } from "react-redux";
import SingleCoinInfo from "../components/SingleCoin/SingleCoinInfo";
import SingleCoinLineGraph from "../components/SingleCoin/SingleCoinLineGraph";
import { Watch } from "react-loader-spinner";

export default function SinglePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(setIsDrawerOpen(false));

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/coins/${id}`
        );
        if (response.status === 429) {
          throw new Error("Too many requests. Please try again later.");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id, dispatch]);

  return (
    <div className="text-white grid grid-cols-3 py-6 max-w-[1280px] mx-auto">
      {isLoading ? (
        <div className="col-span-3 flex items-center justify-center min-h-[70vh]">
          <Watch
            visible={true}
            height="250"
            width="250"
            ariaLabel="watch-loading"
            color="#87CEEB"
          />
        </div>
      ) : (
        <>
          {error ? (
            <div className="col-span-3 flex flex-col items-center justify-center min-h-[70vh]">
              <p className="font-Montserrat text-2xl font-medium leading-5 mb-6">
                {error}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => window.location.reload()}
                  className="font-Roboto text-black hover:bg-opacity-90 transition-opacity text-sm leading-6 font-bold py-2 px-5 rounded bg-secondary"
                >
                  Retry
                </button>
                <button
                  onClick={() => navigate("/", { replace: true })}
                  className="font-Roboto text-black hover:bg-opacity-90 transition-opacity text-sm leading-6 font-bold py-2 px-5 rounded bg-secondary"
                >
                  Go Home
                </button>
              </div>
            </div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-1 px-6"
              >
                <SingleCoinInfo data={data} />
              </motion.div>
              <div className="col-span-2 border-l-2 border-l-gray-600">
                <SingleCoinLineGraph data={data} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
