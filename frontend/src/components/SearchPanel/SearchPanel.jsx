import React, { useState } from 'react'
import "./SearchPanel.css"
const SearchPanel = ({ updateTerm }) => {
  const [term, setTerm] = useState("")
  const search = (e) => {
    setTerm(e.target.value)
    updateTerm(e.target.value)
  } 

  return (
    <>
      <input type="text" className='form-control search-input' placeholder='Kinolarni qidirish' value={term} onChange={search} />
    </>
  )
}

export default SearchPanel