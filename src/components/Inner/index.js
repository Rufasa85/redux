import React, { useContext } from 'react'
import "./style.css"
import { CounterContext } from '../../utils/CounterContext'
import ColorPicker from '../ColorPicker'

export default function Inner() {
 const {state} =  useContext(CounterContext)
  return (
    <>
    <h1 className="Inner">Inner Count: {state.count}</h1>
    <ColorPicker/>
    </>
  )
}
