import React,{useContext} from 'react'
import { CHANGE_COLOR } from '../../utils/actions'
import { CounterContext } from '../../utils/CounterContext'

export default function ColorPicker() {
    const {dispatch,state} = useContext(CounterContext)
    const changeColors = e=>{
        dispatch({
            type:CHANGE_COLOR,
            payload:{
                color:e.target.value
            }
        })
    }
  return (
    <div>
        <input type="color" value={state.color} onChange={changeColors}/>
    </div>
  )
}
