import React, { useEffect, useState } from 'react'
import "./App.css"
import AppInfo from "../AppInfo/AppInfo"
import AppFilter from "../AppFilter/AppFilter"
import SearchPanel from "../SearchPanel/SearchPanel"
import AppList from '../AppList/AppList'
import AppForm from '../AppForm/AppForm'
const App = () => {
  const defaultData = [
    {
      name: "Empire of Osman",
      viewers: 811,
      id: 1,
      watched: false,
      liked: false
    },
    {
      name: "Ertugrul",
      viewers: 811,
      id: 2,
      watched: false,
      liked: false
    },
    {
      name: "Solo leveling",
      viewers: 999999,
      id: 3,
      watched: true,
      liked: false
    },
  ]

  const [data, setData] = useState(defaultData)
  const [term, setTerm] = useState("")
  const [filter, setFilter] = useState("all")
  function addMovie({ name, views }) {
    const item = {
      name,
      viewers: +views,
      id: Date.now(),
      watched: false,
      liked: false
    }
    setData([...data, item])
  }

  const watchedHandler = (type, id) => {
    const changedData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          [type]: !item[type]
        }
      }
      return item
    })

    setData(changedData)
  }

  const deleteHandler = (id) => {
    const newData = data.filter(item => item.id !== id)
    setData(newData)
  }

  const searchHandler = (arr, query) => {
    const lower = query.toLowerCase().trim()
    if (!lower) {
      return arr
    }
    const searched = arr.filter((item) => {
      return item.name.toLowerCase().trim().includes(lower)
    })
    return searched
  }
  const updateTerm = (term) => {
    setTerm(term)
  }

  const filterHandler = (arr, filter) => {
    if (filter === "all") {
      return arr
    };
    return arr.filter(item => item[filter])
  }

  const updateFilter = (filter) => {
    setFilter(filter)
  }


  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo data={data} />
        <div className='search-panel'>
          <SearchPanel updateTerm={updateTerm} />
          <AppFilter updateFilter={updateFilter} />
        </div>
        <AppList data={filterHandler(searchHandler(data, term), filter)} watchedHandler={watchedHandler} deleteHandler={deleteHandler} />
        <AppForm addMovie={addMovie} />
      </div>
    </div>
  )
}

export default App