import React from "react";
import "./pagination.css";

export default function Pagination({
  postsPerPage,
  setCurrentPage,
  postsLen,
  currentPage,
}) {
  // Calculate the number of pages
  const pages = [];
  const pagesNumber = Math.ceil(postsLen / postsPerPage);

  for (let i = 1; i <= pagesNumber; i++) {
    pages.push(i);
  }

  if (pages.length === 1) return null;

  const handlePageChange = (page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  return (
    <div className="paginator">
      {currentPage > 1 && (
        <button
          onClick={() => {
            if (currentPage > 1) handlePageChange(currentPage - 1);
          }}
          className="paginatorButton"
        >
          {"<"}
        </button>
      )}
      {pages.map((page, index) => (
        <button
          key={index}
          className={`paginatorButton ${page === currentPage ? "active" : ""}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}

      {currentPage < pagesNumber && (
        <button
          onClick={() => {
            if (currentPage < pagesNumber) handlePageChange(currentPage + 1);
          }}
          className="paginatorButton"
        >
          {">"}
        </button>
      )}
    </div>
  );
}
