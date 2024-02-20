import React from 'react'
import './pagination.css'

export default function Pagination({postsPerPage, setCurrentPage, postsLen}) {

    //cantidad de paginas = totalDePosts / postsPorPagina
    const pages = [];

    for (let i = 1; i <= Math.ceil(postsLen/postsPerPage); i++) {
        pages.push(i)
    }

    if (pages.length === 1) return null;

    console.log(pages);
  return (
    <div className='paginatorButton'>
      {pages.map(page => <button onClick={() => setCurrentPage(page)}>{page}</button>)}
    </div>
  )
}
