import React from "react"
//задача: запуск и остановка таймера
// в данном примере используется стэйт для создания счетчика
// useRef для хранения и получения актуального значения таймера

const TimerRef = () => {

    const [number, setNumbers] = React.useState([1, 2, 3, 4, 5])
    const timeRef = React.useRef()

    const addNumbers = () => {
        setNumbers(prev => [...prev, Math.round(Math.random() * 10)])//для рандомного добавления        
        // setNumbers(prev => [...prev, prev[prev.length -1] + 1])//для добавления по порядку
    }

    const start = () => {
        timeRef.current = setInterval(addNumbers, 1000)
    }

    const stop = () => {
        clearInterval(timeRef.current)
    }

    return (
        <>
            <button onClick={addNumbers}>add number</button>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <ul>
                {number.map((el, index) => <li key={index}>{el}</li>)}
            </ul>
            
        </>
    )
}
export default TimerRef;