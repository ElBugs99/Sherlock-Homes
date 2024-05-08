import React from "react";

import './carrusel.css'
import scroller from "react-scroll";


export default function carrusel(){

  const DURATIONS = ["20s", "26s", "30s"]

const duplicate = (index) => {
  const clone = scroller.cloneNode(true)
  clone.id = `id:${index}`
  const section = clone.querySelector('section')
  section.style.animationDuration = DURATIONS[index];
  section.style.animationName = (index%2===0) ? 'scroll_right' : 'scroll_left'
  document.body.appendChild(clone);
}

duplicate(0)
duplicate(1)
duplicate(2)

  return(
    
<article id="scroller">
<section>
      <span>
    Pelusina
  </span>
    <span>
    🤖
  </span>
    <span>
    JS
  </span>
    <span>
    🍿
  </span>
    <span>
    React
  </span>
    <span>
    🤯
  </span>
      <span>
    TailwindCSS
  </span>
        <span aria-hidden>
    Pelusina
  </span>
    <span aria-hidden>
        🤖
  </span>
   <span aria-hidden>
    JS
  </span>
     <span aria-hidden>
       🍿
  </span>
     <span aria-hidden>
    React
  </span>
     <span aria-hidden>
       🤯
  </span>
       <span aria-hidden>
    TailwindCSS
  </span>
</section>
</article>

  )





}