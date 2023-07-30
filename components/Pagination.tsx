import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Pagination = ({ total, pageSize, onClick, ShowPageSize = false, activePage }: any) => {
  const totalPages = Math.ceil(total / pageSize);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  const startItem = (activePage - 1) * pageSize + 1;
  const endItem = Math.min(startItem + pageSize - 1, total);

  return (
    <div className="flex items-center justify-between border-t px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        {/* Previous Link */}
        <button
          onClick={() => onClick(activePage - 1)}
          disabled={activePage === 1}
          className={`relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 ${
            activePage === 1 ? 'bg-gray-100 cursor-not-allowed' : 'hover:bg-gray-50'
          }`}
        >
          Previous
        </button>
        {/* Next Link */}
        <button
          onClick={() => onClick(activePage + 1)}
          disabled={activePage === totalPages}
          className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 ${
            activePage === totalPages ? 'bg-gray-100 cursor-not-allowed' : 'hover:bg-gray-50'
          }`}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{startItem}</span> to{' '}
            <span className="font-medium">{endItem}</span> of <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px" aria-label="Pagination">
            {pageNumbers.map((number: any) => {
              return (
                <button
                  key={number}
                  onClick={() => onClick(number)}
                  aria-current="page"
                  className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ${
                    activePage === number ? 'bg-black text-OffWhite' : 'text-black'
                  } cursor-pointer focus:z-20 focus-visible:outline focus:outline-none border-[.2px] ${
                    activePage === number ? 'pointer-events-none' : 'hover:bg-gray-50'
                  }`}
                >
                  {number}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
