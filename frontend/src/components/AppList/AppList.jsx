import React from 'react'
import "./AppList.css"
import AppListItem from '../AppListItem/AppListItem'
const AppList = ({ data, watchedHandler, deleteHandler}) => {
  return (
    <ul className='app-list'>
      {data.map(item => (
        <AppListItem {...item}  key={item.id} watchedHandler={watchedHandler} deleteHandler={deleteHandler} />
      ))}
    </ul>
  )
}

export default AppList