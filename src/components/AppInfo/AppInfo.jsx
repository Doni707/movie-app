import React from 'react'
import "./AppInfo.css"

const AppInfo = ({data}) => {
  const watched = data.filter(item => item.watched)
  return (
    <div className='app-info'>
        <p className='fs-3 text-uppercase'>barcha kinolar soni: {data.length} </p>
        <p className='fs-4 text-uppercase'>Ko'rilgan kinolar soni: {watched.length} </p>
    </div>
  )
}

export default AppInfo