import React from 'react'

export default function Pagination({postsPerPage, setCurrentPage, postsLen}) {

    //cantidad de paginas = totalDePosts / postsPorPagina
    const pages = [];

    for (let i = 1; i <= Math.ceil(postsLen/postsPerPage); i++) {
        pages.push(i)
    }

    console.log(pages);
  return (
    <div>
      {pages.map(page => <button onClick={() => setCurrentPage(page)}>{page}</button>)}
    </div>
  )
}
