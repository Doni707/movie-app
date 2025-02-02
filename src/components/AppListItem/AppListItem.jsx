import { Component } from 'react'
import "./AppListItem.css"

class AppListItem extends Component {
  constructor(props) {
    super(props)
  }


  likeAndWatchedHandler = (type, id) => {
    this.props.watchedHandler(type, id)
  }

  deleteHandler = (id) => {
    this.props.deleteHandler(id)
  }



  render() {
    const { name, viewers, watched, id, like } = this.props
    return (
      <li className={`list-group-item d-flex justify-content-between ${watched && "watched"} ${like && "like"}`}>
        <span className='list-group-item-label' onClick={() => this.likeAndWatchedHandler("like", id)}>{name}</span>
        <input type="number" className='list-group-item-input' defaultValue={viewers} />
        <div className='d-flex justify-content-center align-items-center'>
          <button className='btn-cookie btn-sm' onClick={() => this.likeAndWatchedHandler("watched" ,id)}>
            <i className='fas fa-cookie'></i>
          </button>
          <button className='btn-trash btn-sm' onClick={() => this.deleteHandler(id)}>
            <i className='fas fa-trash'></i>
          </button>
          <i className='fas fa-star'></i>
        </div>
      </li>
    )
  }
}

// const AppListItem = ({ name, viewers, watched }) => {
//   return (
//     <li className={`list-group-item d-flex justify-content-between ${watched && "watched"}`}>
//       <span className='list-group-item-label'>{name}</span>
//       <input type="number" className='list-group-item-input' defaultValue={viewers} />
//       <div className='d-flex justify-content-center align-items-center'>
//         <button className='btn-cookie btn-sm'>
//           <i className='fas fa-cookie'></i>
//         </button>
//         <button className='btn-trash btn-sm'>
//           <i className='fas fa-trash'></i>
//         </button>
//         <i className='fas fa-star'></i>
//       </div>
//     </li>
//   )
// }

export default AppListItem