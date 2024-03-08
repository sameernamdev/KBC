import Price from "./priceComponant/price"
import style from "./style.module.css"
import { quiz } from "./data"
import { useContext, useEffect, useState } from "react"
import { Content } from "../App"
import Finish from "./finishComponent/finish"
import POF from "./LifelineComponant/PhoneOfFriend"
import AP from "./Audiencepoll/Ap"

export default function KBC() {
    var { index, setIndex, result, setResult } = useContext(Content)


    var [pof, setPOF] = useState(true)
    var [Aud, setAud] = useState(true)
    var [fty, setFty] = useState({ 'option1': null, 'option2': null, 'option3': null, 'option4': null })
    var [a, setA] = useState(0)
    var [b, setB] = useState(0)
    var [c, setC] = useState(0)
    var [d, setD] = useState(1)

    var intro=()=>{
        var voice2=new Audio('../Audio/tick.mp3')
        voice2.play()        

    }
    useEffect(()=>{
        intro()
    },[])

    var checkAns = (x, y) => {
        if (quiz[index].answer == x) {
            y.style.backgroundColor = "yellow"
            y.style.color = "black"
            setTimeout(() => {
                y.style.backgroundColor = "green"
                var voice3 = new Audio('../Audio/cheering.mp3')
                voice3.play()
                setAud(true)
                setPOF(true)
            }, 1000)

            if (index <14) {
                setTimeout(() => {
                    setIndex(index + 1);
                    setC(0)
                    y.style.backgroundColor = "blue"
                    y.style.color = "white"
                }, 3000)

            }
            if (index == 14) {
                setResult("WINNER")
                setIndex(index)
            }
        }

        else {
            y.style.backgroundColor = "yellow"

            y.style.color = "black"
            setTimeout(() => {
                y.style.backgroundColor = "red"
            }, 1000)

            setTimeout(() => {
                
                setResult("GAME OVER")
                // setIndex(index-1)
            }, 1500); 
        }

    }

    var fifty = () => {
        setC(1)
        // quiz[index] =>   ques-1
        var temp = ['option1', 'option2', 'option3', 'option4']
        temp.forEach((item) => {
            if (quiz[index][item] == quiz[index]['answer']) {
                temp.splice(temp.indexOf(item), 1)
                setFty(fty[item] = quiz[index]['answer'])

                setFty({ ...fty })
            }
        })
        //generate random index of wrong answer
        var i = Math.floor(Math.random() * temp.length)
        //get wrong answer key
        var key = temp[i]
        //get wrong answer value
        var value = quiz[index][key]
        setFty(fty[key] = value)
        setFty({ ...fty })
        console.log(fty)
        setD(0)

    }

    return (
        <>

            <div className={[style.container, (result) ? style.container2 : ""].join(' ')}>

                <div className={style.col1}>
                    {/* <h1 style={{"color":"white"}}>Call Price Componant here</h1> */}
                    <Price />
                </div>
                <div className={style.col2}>

                </div>
                <div className={style.col3}>
                    <div className={style.upper}>
                        <div className={style.life1} onClick={() => {
                            if (a == 0) {
                                var voice = new Audio('../Audio/tick2.mpeg')
                                voice.play()
                                setPOF(!pof)
                                setA(1)



                            }
                            else {
                                alert("you already used this life line")
                            }
                        }
                        }
                        >
                            <ion-icon name="call"  ></ion-icon>
                            {(a == 1) ?
                                // <img className={style.lifeImg} alt="" src="https://w7.pngwing.com/pngs/258/656/png-transparent-delete-remove-cross-red-cancel-abort-error-red-cross.png" />
                                <img className={style.lifeImg} alt="" src="../images/cross-removebg-preview.png" />
                                :
                                ""
                            }
                            {/* <button >xyz</button> */}
                        </div>
                        <div className={style.life2}
                            onClick={() => {
                                if (b == 0) {
                                    setAud(!Aud)
                                    setB(1)

                                }
                                else {
                                    alert("you already used this life line")
                                }
                            }
                            }
                        >


                            <ion-icon name="people"></ion-icon>

                            {(b == 1) ?
                                <img className={style.lifeImg} alt="" src="../images/cross-removebg-preview.png" />
                                :
                                ""
                            }
                        </div>
                        <div className={style.life3} onClick={() => (d == 1) ? fifty() : alert("you already used this life line")}>
                            <h5>50:50</h5>
                            {(d == 0) ?
                                <img className={style.lifeImg} alt="" src="../images/cross-removebg-preview.png" />
                                :
                                ""
                            }
                        </div>
                    </div>
                    <div className={style.lower}>
                        {(!pof) ? <POF value={pof} handler={setPOF} /> : ""}
                        {(!Aud) ? <AP /> : ""}
                    </div>
                </div>

                {/* row 2 */}
                {(c == 0) ?
                    <div className={style.row2}>
                        <div className={style.r1}>{index + 1}. {(index<15)?quiz[index].ques:""} </div>
                        <div className="" onClick={(e) => { checkAns(quiz[index].option1, e.target) }}>A. {quiz[index].option1} </div>
                        <div className="" onClick={(e) => { checkAns(quiz[index].option2, e.target) }}>B. {quiz[index].option2} </div>
                        <div className="" onClick={(e) => { checkAns(quiz[index].option3, e.target) }}>C. {quiz[index].option3} </div>
                        <div className="" onClick={(e) => { checkAns(quiz[index].option4, e.target) }}>D. {quiz[index].option4} </div>

                    </div>
                    :
                    <div className={style.row2}>
                        {console.log(fty)}
                        <div className={style.r1}>{index + 1}. {quiz[index].ques}  </div>
                        <div className="" onClick={(e) => { if (fty.option1 != null) { checkAns(quiz[index].option1, e.target) } }}>A. {fty.option1} </div>
                        <div className="" onClick={(e) => { if (fty.option2 != null) { checkAns(quiz[index].option2, e.target) } }}>B. {fty.option2} </div>
                        <div className="" onClick={(e) => { if (fty.option3 != null) { checkAns(quiz[index].option3, e.target) } }}>C. {fty.option3} </div>
                        <div className="" onClick={(e) => { if (fty.option4 != null) { checkAns(quiz[index].option4, e.target) } }}>D. {fty.option4} </div>

                    </div>
                }
                {(result != "") ? <Finish result={result} /> : <></>}
            </div>
        </>
    )
}