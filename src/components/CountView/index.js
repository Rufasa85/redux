import React from 'react'
import Outer from '../Outer'
import "./style.css"

export default function CountView(props) {
  return (
    
    <div className="CountView">
      CountView
      <Outer count={props.count}/>
    </div>
  )
}
