import { useEffect, useState } from "react"
import style from "./POF.module.css"
export default function POF(props)
{
    var [count,setCount]=useState(60)
    function decreament()
    {           
     setTimeout(()=>{
        if(count!=0)
        {
            setCount(count-1)
        }
        else
        {
            props.handler(!props.value)
        }
     },1000)   
    }
    useEffect(()=>{
        decreament()
    })
    return(
        <>
            <div className={style.circle}>
                <h1>{count}</h1>
            </div>
        </>
    )
}
