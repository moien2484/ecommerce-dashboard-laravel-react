import React from 'react'
import "./Baner1.css"
export default function Baner1() {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12"><img className='rounded banner' src="img/20.png" style={{width:"100%" , height:"auto"}} alt="" /></div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12"><img className='rounded banner' src="img/21.png" style={{width:"100%" , height:"auto"}} alt="" /></div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12"><img className='rounded banner' src="img/22.png" style={{width:"100%" , height:"auto"}} alt="" /></div>
      </div>
    </div>
  )
}
