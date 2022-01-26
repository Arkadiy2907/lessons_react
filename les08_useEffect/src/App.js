import React from "react"
import "./app.css"
import ListClass from "./list"
import ListFun from "./funList"

const App = () => {

  const [visible, setVisible] = React.useState(true)

  const toogle = () => {
    setVisible((visibleList) => !visibleList)//берется не просто !visible чтоб не предедавалось предыдущие состояния а бралось все по новой
  }

  const [visibleFun, setVisibleFun] = React.useState(true)

  const toogleFun = () => {
    setVisibleFun((visibleFunс) => !visibleFunс)
  }



  return (
    <>
      <h2>class component</h2>
      <button onClick={toogle}>visible / clear</button>
      {visible && <ListClass />}
      <hr />
      <h2>function component</h2>
      <button onClick={toogleFun}>visible / clear</button>
      {visibleFun && <ListFun />}
    </>
  )
}

export default App;
