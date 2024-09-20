import { Pagination } from "flowbite-react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function CustomPagination({ page, setPage, totalPages }) {
  const onPageChange = (newPage) => setPage(newPage);

  const customPaginationTheme = {
    layout: {
      table: {
        base: "text-sm text-gray-700 dark:text-gray-400",
      },
    },
    pages: {
      base: "flex items-center gap-2 mt-2",
      previous: {
        base: "mr-2",
      },
      next: {
        base: "ml-2",
      },
      selector: {
        base: "px-4 py-2 rounded-lg text-secondary hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
        active: "bg-gray-300 text-secondary dark:bg-gray-600",
        disabled: "opacity-50 cursor-not-allowed",
      },
    },
  };

  return (
    <div className="flex justify-center overflow-x-auto">
      <Pagination
        theme={customPaginationTheme}
        currentPage={page}
        totalPages={totalPages}
        previousLabel={<FaAngleLeft className="text-secondary" />}
        nextLabel={<FaAngleRight className="text-secondary" />}
        onPageChange={onPageChange}
      />
    </div>
  );
}
