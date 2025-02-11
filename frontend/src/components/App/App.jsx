import React, { useEffect, useState } from 'react'
import "./App.css"
import AppInfo from "../AppInfo/AppInfo"
import AppFilter from "../AppFilter/AppFilter"
import SearchPanel from "../SearchPanel/SearchPanel"
import AppList from '../AppList/AppList'
import AppForm from '../AppForm/AppForm'
import MovieService from '../../services/movie'
import Pagination from '../Pagination/Pagination'
const App = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [filter, setFilter] = useState("all")
  const [page, setPage] = useState(0)
  const [pagination, setPagination] = useState([])
  useEffect(() => {
    if (data.length === 0) {
      setLoading(true)
      MovieService.all("all").then(({ data }) => {
        const { movies, length } = data
        const len = Math.ceil(length / 5)
        const paginationList = new Array(len).fill("")
        setPagination(paginationList)
        setData(movies)
      }).finally(() => setLoading(false))
    }
  }, [filter, page])
  const [term, setTerm] = useState("")
  async function addMovie({ name, views }) {
    const item = {
      name,
      views: +views,
      watched: false,
      liked: false
    }
    const result = await MovieService.add(item)
    setData([...data, result.data])
  }

  const watchedHandler = async (type, id) => {
    const changedData = data.map((item) => {
      if (item._id === id) {
        return {
          ...item,
          [type]: !item[type]
        }
      }
      return item
    })
    await MovieService.action(id, type)
    setData(changedData)
  }

  const deleteHandler = async (id) => {
    const newData = data.filter(item => item._id !== id)
    await MovieService.delete(id)
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

  const handlerPagination = (page) => {
    setPage(page)
    setLoading(true)
    MovieService.all("all", page-1).then(({ data }) => {
      const { movies} = data
      console.log(page)
      console.log(movies)
      setData(movies)
    }).finally(() => setLoading(false))
  }


  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo data={data} />
        <div className='search-panel'>
          <SearchPanel updateTerm={updateTerm} />
          <AppFilter updateFilter={updateFilter} />
        </div>
        {isLoading ? <>
          <div className='search-panel d-flex justify-center'>
            <h1 className='text-danger text-center w-100'>Loading</h1>
          </div>
        </> : <>
          <AppList data={filterHandler(searchHandler(data, term), filter)} watchedHandler={watchedHandler} deleteHandler={deleteHandler} />
          <Pagination pagination={pagination} page={page} setPagination={handlerPagination} />
        </>}

        <AppForm addMovie={addMovie} />
      </div>
    </div>
  )
}

export default App