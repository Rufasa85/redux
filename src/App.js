import { useState } from "react";
import ColorCard from "./components/ColorCard";
import CountButtons from "./components/CountButtons";
import CountView from "./components/CountView";
import CounterProvider from "./utils/CounterContext";

function App() {
  return (
    <CounterProvider>
    <CountView />

     {/* <button onClick={()=>setCount(count+1)}>Increment</button>
     <button onClick={()=>setCount(count-1)}>Decrement</button>
     <button onClick={()=>setCount(0)}>reset</button> */}
     <CountButtons />
     <ColorCard/>
     <ColorCard/>
     <ColorCard/>
     </CounterProvider>
  );
}

export default App;
