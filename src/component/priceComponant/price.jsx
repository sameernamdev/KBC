import style from "./style.module.css"
import { price } from "../data"
import { useContext } from "react"
import { Content } from "../../App"
export default function Price()
{
    var {index,setIndex}=useContext(Content)
    return(
        <>
        <div className={style.container}>
            <ul className={style.ul}>
                {price.map((item,key)=><li key={key} className={[(index==key)?style.active:"",(index>key)?style.clear:""].join(' ')}>{item}</li>)}
            </ul>
        </div>
        </>
    )
}