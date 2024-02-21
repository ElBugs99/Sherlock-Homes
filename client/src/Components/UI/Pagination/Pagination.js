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
        <button className="paginatorButton">{"<"}</button>
      {pages.map((page, index) => (
        <button
          key={index}
          className={`paginatorButton ${
            page === currentPage ? "active" : ""
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <button onClick={() => setCurrentPage(prev => prev + 1)} className="paginatorButton">{">"}</button>
    </div>
  );
}
