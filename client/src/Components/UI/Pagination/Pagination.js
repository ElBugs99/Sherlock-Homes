import React from "react";
import "./pagination.css";

export default function Pagination({
  postsPerPage,
  setCurrentPage,
  postsLen,
  currentPage,
}) {
  //cantidad de paginas = totalDePosts / postsPorPagina
  const pages = [];
  const pagesNumber = Math.ceil(postsLen / postsPerPage);

  for (let i = 1; i <= pagesNumber; i++) {
    pages.push(i);
  }

  if (pages.length === 1) return null;

  return (
    <div className="paginator">
      {currentPage > 1 && (
        <button
          onClick={() => {
            if (currentPage > 1) setCurrentPage((prev) => prev - 1);
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
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}

      {currentPage < pagesNumber && (
        <button
          onClick={() => {
            if (currentPage < pagesNumber) setCurrentPage((prev) => prev + 1);
          }}
          className="paginatorButton"
        >
          {">"}
        </button>
      )}
    </div>
  );
}
