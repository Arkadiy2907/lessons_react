import React from "react"
import "./app.css"


const App = () => {

  // let numbers = [1, 2, 3]
  const [numbers, setNum] = React.useState([1, 2, 3])

  const addNum = () => {
    const rundomNum = Math.round(Math.random() * 10)
    const newArr = [...numbers, rundomNum] //берутся все значения из старого numbers и добавляем к ним новое rundomNum

    setNum(newArr)// для того чтоб реакт понял что необходимо обновиться через setNum
    // numbers.push(4) // это было бы достаточно для js
    console.log(newArr)
  }
  return (
    <>
      <button onClick={addNum}>new nam</button>
      <ul>
        {
          numbers.map((el, index) => <li key={index}>{el}</li>)
        }
      </ul>
    </>
  )
}

export default App;
