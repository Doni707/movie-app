import React, { useState } from 'react'
import "./Pagination.css"

function Pagination({ pagination, setPagination, page }) {
    const [page2, setPage] = useState(0)
    const handlerPagination = (page) => {
        const content = parseInt(page.target.textContent)
        setPage(content)
        
        setPagination(content)
    }

    return pagination ? <>
        <div className='mt-2 mb-2 d-flex justify-content-center'>
            <ul className="pagination">
                {/* <li className="page-item" key={"prev"} ><a className={`page-link text-dark ${page === 1 && "disabled"}`}>Previous</a></li> */}
                {pagination.map((i, index) => (
                    <li className="page-item" key={index}><a className="page-link text-dark" href='#' onClick={handlerPagination}>{index + 1}</a></li>
                ))}
                {/* <li className="page-item" key={"next"} ><a className={`page-link text-dark ${page === pagination.length && "disabled"}`}>Next</a></li> */}
            </ul>
        </div>
    </> : null

}

export default Pagination