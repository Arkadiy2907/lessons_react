import React from "react";
import {useState} from 'react'


const FuncState = () => {

    const [count, setCount] = useState(0)
    const [comment, setComent] = useState([])

    let myRef = React.createRef()

   let handler = () => {
        let currentCount = count
        currentCount++
       setCount(currentCount)       
    }

    let addComment = () => {
        let commentValue = myRef.current.value;
        let comments = [...comment, commentValue]
        setComent(comments)
        myRef.current.value = ''
    }

    return (
        <>
            <h1>State</h1>
            <div>
                <button onClick={handler}>this button change state</button>
            </div>
            <div>
                {count % 2 === 0 ? "even" : "odd"}
            </div>
            <div>
                {count}
            </div>
            <div>
                <textarea ref={myRef}></textarea>
            </div>
            <div>
                <button onClick={addComment}>add comment</button>
            </div>
            <div>
                <ul>
                    {comment.map((item, index) => <li key={index.toString()}>{item}</li>)}
                </ul>
            </div>
        </>
    )
}






export default FuncState