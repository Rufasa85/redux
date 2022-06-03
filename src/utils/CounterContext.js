import React, { createContext, useState, useReducer } from 'react'

import reducer from './reducer'
export const CounterContext = createContext()

export default function CounterProvider(props) {
    const initialState = {count:0,color:"#fa8072"}
    const [state, dispatch] = useReducer(reducer,initialState)
  return (
   <CounterContext.Provider value={{
    dispatch,
    state
   }}>
       {props.children}
   </CounterContext.Provider>
  )
}
