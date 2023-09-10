import { useState } from "react"

export default function Button() {

    const [count, setCounter] = useState(0);
    const increaseCounter = ()=>{
        setCounter(count + 1);
    }
    return(
        <>  
            
            <button onClick={increaseCounter}>{count}</button>
        </>
    )
}