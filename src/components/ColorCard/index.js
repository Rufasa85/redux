import React,{useContext} from 'react'
import { CounterContext } from '../../utils/CounterContext'
import { MAKE_SALMON } from '../../utils/actions'

export default function ColorCard() {
    const {state, dispatch} = useContext(CounterContext)
    const styles = {
        display:"inline-block",
        height:"200px",
        width:"200px",
        background:state.color,
        border:`1px solid black`
    }
  return (
    <div style={styles}>
        <h3>Color selected: {state.color}</h3>
        <button onClick={()=>dispatch({
            type:MAKE_SALMON
        })}>Make salmon</button>
    </div>
  )
}
