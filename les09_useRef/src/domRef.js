import React from "react"

//задача: отслеживать скролл
// в данном примере используется стэйт для создания счетчика
// useEffect для получения значения после рендера и изменений
// useRef для получения актуального значения дом элемента тут UL
//тут есть проблема при добавлении чисел затем удалить скролл но все рабно отображается присутствие скролла

const DomRef = () => {

    const [number, setCount] = React.useState([1, 222, 3, 34, 2, 34])
    const ulRef = React.useRef()

    const addCount = () => {
        const newNum = ~~(Math.random() * 10)//исключающее ~ "не" отбрасывает дробную часть
        setCount([...number, newNum])
    }

    const handleScroll = () => {
        console.log('was scroll')
    }

    React.useEffect(() => {
        ulRef.current.addEventListener('scroll', handleScroll)
    }, [])

    const removeScroll = () => {
        ulRef.current.removeEventListener('scroll', handleScroll)
    }

    return (
        <>
            <button onClick={addCount}>add number</button>
            <ul className="ulDom" ref={ulRef}>
                {number.map((el, index) => <li key={index}>{el}</li>)}
            </ul>
            <button onClick={removeScroll}>removeScroll</button>
        </>
    )
}

export default DomRef;