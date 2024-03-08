import { useEffect, useState } from "react"
import style from "./Ap.module.css"
export default function AP() {
    var [index, setindex] = useState()
    var [index1, setindex1] = useState()
    var [index2, setindex2] = useState()
    var [index3, setindex3] = useState()

    // var [b,setB]=useState()
    function Bar() {
        let sum = 100
        var numbers = []
        for (let i = 0; i <= 3; i++) {
            const randomNumber = Math.floor(Math.random() * sum)
            sum -= randomNumber < 0 ? 10 : randomNumber
            numbers.push(randomNumber < 10 ? 10 : randomNumber)
        }
        // numbers.push(sum)
        console.log(numbers)
        setindex(numbers[0])
        setindex1(numbers[1])
        setindex2(numbers[2])
        setindex3(numbers[3])

        console.log(index)
    }

    useEffect(() => {
        Bar()
    },[])
    return (
        <>
            <div className={style.box}>
                <div className={style.innerbox} style={{ "height": index*5 }} ><h3>A</h3></div>
                <div className={style.innerbox} style={{ "height": index1*5 }}><h3>B</h3></div>
                <div className={style.innerbox} style={{ "height": index2*5 }}><h3>C</h3></div>
                <div className={style.innerbox} style={{ "height": index3*5 }}><h3>D</h3></div>
            </div>
        </>
    )
}