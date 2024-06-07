import React from 'react'
import Navbar from './Navbar'

const DeleteAlbum = () => {
  return (
    <div>
      <Navbar/>
      <br></br>
        <center><h1>Delete Album</h1></center>
        <br></br>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-mg-12">
                <label htmlFor="" className="form-label">Album Title</label>
                <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-mg-12">
                <button className="btn btn-success">Delete</button>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default DeleteAlbum