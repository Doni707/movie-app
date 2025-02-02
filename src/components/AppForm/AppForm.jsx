import { Component, useState } from "react"

import "./AppForm.css"

// class AppForm extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: "",
//       views: "",
//       warning: "",
//     }
//   }


//   changeHandlerInput = (e) => {
//     this.setState(() => ({
//       [e.target.name]: e.target.value
//     }))
//   }

//   submitHandler = (e) => {
//     e.preventDefault()
//     if (!this.state.name || !this.state.views) {
//       this.setState({
//         warning: "Warning"
//       })
//       return
//     }
//     this.props.addMovie({
//       name: this.state.name,
//       views: this.state.views
//     })
//     this.setState(() => ({
//       name: "",
//       views: "",
//       warning: ""
//     }))
//   }

//   render() {
//     return (
//       <div className='app-form'>
//         <h3>Yangi kino qo'shish</h3>
//         <h4 className="text-danger text-center">{this.state.warning}</h4>
//         <form className="add-form d-flex" action="#">
//           <input type="text" name="name" className="form-control new-post-label" placeholder="Qanday kino?" onChange={this.changeHandlerInput} />
//           <input type="number" name="views" className="form-control new-post-label" placeholder="Nechi marotaba ko'rilgan?" onChange={this.changeHandlerInput} />
//           <button onClick={this.submitHandler} type="submit" className="btn btn-outline-dark">
//             Qo'shish
//           </button>
//         </form>
//       </div>
//     )
//   }
// }

const AppForm = ({ addMovie }) => {
  const [name, setName] = useState("")
  const [views, setViews] = useState("")
  const [warning, setWarning] = useState("")


  const submitHandler = (e) => {
    e.preventDefault()
    if (!name || !views) {
      setWarning("Hamma maydonlarni to'diring")
      return
    }
    const movie = {
      name,
      views,
    }
    addMovie(movie)
    setName("")
    setViews("")
    setWarning("")
  }


  return (
    <div className='app-form'>
      <h3>Yangi kino qo'shish</h3>
      <h4 className="text-danger text-center">{warning}</h4>
      <form className="add-form d-flex" onSubmit={submitHandler}>
        <input type="text" className="form-control new-post-label" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Qanday kino?" />
        <input type="number" className="form-control new-post-label" name="views" value={views} onChange={(e) => setViews(e.target.value)} placeholder="Nechi marotaba ko'rilgan?" />
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  )
}

export default AppForm