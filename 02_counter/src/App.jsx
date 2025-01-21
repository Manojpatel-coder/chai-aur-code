import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(5);
// let counter=5;
const addValue=()=>{
   if(counter<20){
    setcounter(counter+1);
   }
  console.log("value added",counter)
} 
const removeValue=()=>{
if(counter>0){
  setcounter(counter-1)
}
  console.log("value removed",counter)
}
 return (
    <>
      <h1>Chai aur code</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>Addvalue {counter}</button>
      <br/>
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
