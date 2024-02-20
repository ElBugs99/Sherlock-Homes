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

  for (let i = 1; i <= Math.ceil(postsLen / postsPerPage); i++) {
    pages.push(i);
  }

  if (pages.length === 1) return null;

  console.log(pages);
  return (
    <div className="paginator">
      {pages.map((page, index) => (
        <button
          key={index}
          className={`paginatorButton ${
            page === currentPage ? "pageActive" : ""
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
