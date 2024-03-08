import { useEffect, useState } from "react"
export default function Kahani()
{
    var[count,setCount]=useState(0)
    var[count2,setCount2]=useState(100)
    useEffect(()=>{
        console.log("useEffect is running")
    },[ ])
    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <hr/>
            <h1>{count2}</h1>
            <button onClick={()=>setCount2(count2-1)}>Decrement</button>
        </>
    )
}

/*
firstly the componant was mount on screen then useEffect fill execute.
and remeber when return or render part will execute then the the useEffect was also
getting execute.
****jab jab element render hoga tab-tab useEffect chalega.
We can decide the useEffect is to get run after the specific changes in render.
*/