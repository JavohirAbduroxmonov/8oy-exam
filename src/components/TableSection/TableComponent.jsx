import React from "react";
import { Table, TableBody, TableHead, TableHeadCell } from "flowbite-react";
import { useSelector } from "react-redux";
import CryptoCoin from "./CryptoCoin";
import { ThreeDots } from "react-loader-spinner";
import Error from "../Error";

export default function TableComponent() {
  const { data, error, isLoading } = useSelector((state) => state.project);

  const customTableTheme = {
    root: {
      base: "w-full text-left text-sm text-gray-600 dark:text-gray-400",
      shadow: "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
      wrapper: "relative",
    },
    body: {
      base: "group/body",
      cell: {
        base: "p-4 text-right text-fontColor border-b border-gray-300 group-last/body:group-last/row:first:rounded-bl-md group-last/body:group-last/row:last:rounded-br-md",
      },
    },
    head: {
      base: "group/head text-sm font-semibold text-gray-800 dark:text-gray-100",
      cell: {
        base: "bg-secondary px-4 py-3 text-right group-first/head:first:text-left rounded-t-md border-b border-gray-300 dark:bg-gray-700",
      },
    },
    row: {
      base: "group/row",
      hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
      striped: "odd:bg-gray-50 even:bg-gray-100 odd:dark:bg-gray-800 even:dark:bg-gray-700",
    },
  };

  return (
    <div className="overflow-x-auto w-full">
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <ThreeDots
            height="100"
            width="100"
            radius="9"
            color="#87CEEB"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </div>
      ) : error ? (
        <Error error={error} />
      ) : (
        <Table theme={customTableTheme}>
          <TableHead>
            <TableHeadCell>Coin</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>24h Change</TableHeadCell>
            <TableHeadCell>Market Cap</TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            {data.length > 0 ? (
              data.map((project) => (
                <CryptoCoin data={project} key={project.id} />
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-6">
                  <p className="text-secondary text-xl">
                    The coin you are looking for does not exist
                  </p>
                </td>
              </tr>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
