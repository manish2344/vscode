import React, { useEffect, useState } from 'react'
import alldata from './problemlistdata';
import './home.css'
import { Link } from 'react-router-dom';
function Problem() {
 const [problem ,setallproblem]= useState(alldata);
  return (
    <div className='allproblem'>
      <table>
  <tr>
    <th>Num</th>
    <th>Title</th>
    <th>Difficulty</th>
    <th>category</th>
  </tr>
 
      {
      problem.map((item)=>(
     <tr>
      
    <td>{item.id}</td>
 <Link to={`/${item.to}`}><td>{item.title}</td></Link>
<td>{item.difficulty}</td>
<td>{item.category}</td>

</tr>
        ))
      }
      {/* </tr> */}
  </table>
    </div>
  )
}

export default Problem