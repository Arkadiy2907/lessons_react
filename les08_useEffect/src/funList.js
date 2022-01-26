import React from "react"


const ListFun = () => {

    const [numbers, setNum] = React.useState([1, 2, 13])

    const addNum = () => {
        const rundomNum = Math.round(Math.random() * 10)
        const newArr = [...numbers, rundomNum] //берутся все значения из старого numbers и добавляем к ним новое rundomNum
        setNum(newArr)// для того чтоб реакт понял что необходимо обновиться через setNum
    }

    // componentDidMount
    React.useEffect(() => {
    console.log('компонент был отображен как componentDidMount')
},[] )//вторым аргументом передается пустой массив чтоб не зачем более не следить

    // componentDidUpdate но выполнится и когда произойдет первый рендер
React.useEffect(() => {
    console.log('компонент был отображен как componentDidUpdate')
})//вторым аргументом ни чего не передает
    
    //componentDidUpdate только для numbers
React.useEffect(() => {
    console.log('следим за обновлением numbers')
}, [numbers])//вторым аргументом передали numbers чтоб следить за ней

    // componentWillUnmount
React.useEffect(() => {
    console.log('компонент был отображен как componentDidMount')
    return () => {//тут ананимная ф-я которая запускается при удалении
        console.log("componentWillUnmount")
    }
},[] )//вторым аргументом передается пустой массив чтоб не зачем более не следить

    
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

export default ListFun;