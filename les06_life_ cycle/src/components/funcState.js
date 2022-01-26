import React, {useEffect, useState} from "react";

const FuncCycle = (props) => {
    console.log('use State')
    const [count, setCount] = useState(props.arg)    

   
    let handler = () => {
        console.log('handler')
        let currentCount = count
        currentCount++
       setCount(currentCount)       
    }

    useEffect(() => {
    console.log("useEffect")
})

    console.log('render1')

    return (
        <>
            {console.log("render2")}
            <div>
                <button onClick={handler}>button</button>
            </div>           
            <div>
                {count}
            </div>            
        </>
    )
}

export default FuncCycle