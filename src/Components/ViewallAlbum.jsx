import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewallAlbum = () => {
    const[data,changeData]=useState([])
        
          const fetchData=()=>{
            axios.get("https://jsonplaceholder.typicode.com/albums").then(
            (response)=>{
              changeData(response.data)
            }
          ).catch().finally()
          } 
          useEffect(()=>{fetchData()},[])
          
   
  return (
    <div>
        <table class="table table-bordered border-dark" border="4">
  <thead>
    <tr>
      <th scope="col">userid</th>
      <th scope="col">id</th>
      <th scope="col">title</th>
    </tr>
  </thead>
  <tbody>
   {data.map(
    (value,index)=>
        {
            return  <tr>
            <td scope="row">{value.userId}</td>
            <td>{value.id}</td>
            <td>{value.title}</td>
          </tr>
        }
   )}
  
  </tbody>
</table>
    </div>
  )
}

export default ViewallAlbum