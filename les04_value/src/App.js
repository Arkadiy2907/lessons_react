import React from "react"
import "./app.css"
import { useState } from "react"

const App = () => { 

  // let a = 5
  let textInput = React.createRef()
  let textOut = React.createRef()
  const [outPut, setOutPut] = useState('state')

  function f1(arg) {
    console.log('fun' + arg)
  }

  function f2(a) {
    console.log('fun' + a)
  }

  function showInput(event) {
    console.log(event.target.value)
    console.log(textInput.current.value)
    textOut.current.innerHTML = textInput.current.value
    setOutPut(textInput.current.value)
  }

  return (
    <div className="wrap">    
      <p>ssss</p>  
      <section>
        <h2>button</h2>
        <button onClick={()=>f1(1)}>push</button>
      </section>
      <section>
        <h2>button + mouse</h2>
        <div className="test" onDoubleClick={() => f2(2)}></div>
      </section>
      <section>
        <h2>input</h2>
        <input type="text" onInput={showInput} ref={textInput} defaultValue="hi" />
        <p ref={textOut}></p>
        <h3>{ outPut }</h3>
      </section>
    </div>
  )
}

export default App;
