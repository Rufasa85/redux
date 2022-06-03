import React from 'react'
import "./style.css"
import Inner from '../Inner'

export default function Outer(props) {
  return (
    <div className="Outer">
      outer component
      <Inner/>
    </div>
  )
}
