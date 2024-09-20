import React, { useEffect, useState } from "react";
import Input from "./Input";
import TableComponent from "./TableComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProjects, setError, setIsLoading } from "../../store/projectSlice";
import PaginationComponent from "./PaginationComponent";

export default function TableSection() {
  const [search, setSearch] = useState("");

  const pageSize = 10;
  const totalPages = 250 / pageSize;
  const [currentPage, serCurrentPage] = useState(1);

  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const {
    currency: { currency },
  } = useSelector((state) => state.project);

  // bu funksiya search qilinayotganda filter qilib beradi
  const filterData = (data) => {
    if (search === "") {
      return data;
    } else {
      return data.filter(
        (coin) =>
          coin.name.toLowerCase().includes(search.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(search.toLowerCase()) ||
          coin.id.toLowerCase().includes(search.toLowerCase())
      );
    }
  };

  useEffect(() => {
    dispatch(setError(null));

    const fetchData = async () => {
      const urlPath = `markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=${currentPage}&sparkline=false&price_change_percentage=24h`;
      try {
        dispatch(setIsLoading(true));
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/coins/${urlPath}`
        );
        if (response.status === 429) {
          throw new Error("Too many requests. Please try again later.");
        }
        const data = await response.json();
        // kelgan datani avval set qilib olib turip, keyin store'ga dispatch qilaman
        setData(data);
      } catch (error) {
        dispatch(
          setError({
            error: error.message,
            status: error.status,
          })
        );
        console.error(error.message);
      } finally {
        dispatch(setIsLoading(false));
      }
    };
    fetchData();
  }, [currency, currentPage]);

  // bu useEffect har safar search qilinayotganda filter qilib beradi
  useEffect(() => {
    dispatch(setProjects(filterData(data)));
  }, [search, data]);

    return (
    <section className="">
      <div className="max-w-[1280px] mx-auto px-6">
        <h3 className="mt-[18px] font-Montserrat text-[34px] leading-[42px] text-center text-white mb-4">
          Cryptocurrency Prices by Market Cap
        </h3>
        <Input search={search} setSearch={setSearch} totalPages={totalPages} />
        <TableComponent />
        <div className="py-5">
          <PaginationComponent
            page={currentPage}
            setPage={serCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </section>
  );
}
