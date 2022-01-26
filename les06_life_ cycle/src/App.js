import React from "react"
import "./app.css"
import ClassCycle from "./components/classState"
import FuncCycle from "./components/funcState"

const App = () => { 

  return (
    <>    
      {/* <ClassCycle arg={88}/> */}
      <hr />
      <FuncCycle arg={99}/>
    </>
  )
}

export default App;
