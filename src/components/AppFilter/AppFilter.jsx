import React, { useState } from 'react'
import "./AppFilter.css"
const AppFilter = ({updateFilter}) => {

  const [filter, setFilter] = useState("all")

  const changeFitler = (e) => {
    const id = e.target.id
    setFilter(id)
    updateFilter(id)
  }
  
  return (
    <div className='btn-group'>
      <button className={`btn ${filter === "all" ? "btn-dark": "btn-outline-dark"}`} id='all' onClick={changeFitler} type='button'>Hamma kinolar</button>
      <button className={`btn ${filter === "like" ? "btn-dark": "btn-outline-dark"}`} id='like' onClick={changeFitler} type='button'>Like qo'yilgan kinolar</button>
      <button className={`btn ${filter === "watched" ? "btn-dark": "btn-outline-dark"}`} id='watched' onClick={changeFitler} type='button'>Ko'rilgan kinolar</button>
    </div>
  )
}

export default AppFilter