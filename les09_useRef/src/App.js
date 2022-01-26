import React from "react"
import "./app.css"
import DomRef from "./domRef"
import TimerRef from "./notForDomRef"

const App = () => {

  return (
    <>
      <DomRef />
      <hr />
      <TimerRef />
    </>
  )
}

export default App;
