import React,{useContext} from 'react'
import "./style.css"
import { CounterContext } from '../../utils/CounterContext'

import { INCREMENT,DECREMENT,RESET } from '../../utils/actions'

export default function CountButtons() {
  const {dispatch} = useContext(CounterContext)
  
   return (
    <div className="CountButtons">
        <button onClick={()=>dispatch({
          type:INCREMENT
        })}>Increment</button>
     <button onClick={()=>dispatch({
          type:DECREMENT
        })}>Decrement</button>
     <button onClick={()=>dispatch({
          type:RESET
        })}>reset</button>
    </div>
  )
}
