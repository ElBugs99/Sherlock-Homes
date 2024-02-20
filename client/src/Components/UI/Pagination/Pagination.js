import React from 'react'

export default function Pagination({postsPerPage, currentPage, postsLen}) {

    //cantidad de paginas = totalDePosts / postsPorPagina
    const pages = [];

  return (
    <div>
      {postsPerPage} {currentPage} {postsLen}
    </div>
  )
}
