'use client'

import WordBox from '../component/wordBox/wordBox'
import Image from 'next/image'
import './guessTheWord.css'
import { redirect, useRouter } from 'next/navigation'
import { LegacyRef, useRef, useState } from 'react'
import { nameEasyArr, type nameEasyArrType } from './words'

const handleRandom = (NumOfRand: number) => {
    let randomIntTem: number = Math.floor(Math.random() * NumOfRand)
    return randomIntTem
}
let tracker: number = 0
let selectedWordPlayV: string[] = []
let randomInt4: number = handleRandom(5) //0 -> 4
let randomInt3: number = handleRandom(4) //0 -> 3
//let randomInt50: number = handleRandom(50)
let randomInt25: number = handleRandom(25) //0 -> 24
let heartArr: number[] = [1, 1, 1, 1, 1, 1]

//HERE IS WHAT WE DONE:
//we try already built the system to validate before open for play
//and it will adding letter on every refresh of page. (we can try using tracker) //PAY ATTENTION TO THAT
//and we also build the system of how it should behave

export default function GuessPage() {
    console.log('THE PAGE HAS RENDERED')
    let [test, setest] = useState()
    const guessRef = useRef<HTMLButtonElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const startRef = useRef<HTMLButtonElement>(null)
    let [hint, setHint] = useState<string>('')
    let router = useRouter()
    tracker++
    let [selectedWordPlayForRender, setselectedWordPlayForRender] = useState<
        string[]
    >([])
    let [heartArrforRender, setheartArrforRender] = useState<number[]>([])

    let [triggerRender, setTriggerRender] = useState<boolean>(false)

    //let randomInt50: number = handleRandom(50)

    let selectedWord = nameEasyArr[randomInt25]
    console.log(selectedWord)
    let selectedWordArr = selectedWord.name.split('')
    console.log(selectedWordArr)
    console.log(tracker)
    //ALL CODE BELOW HERE IS FOR VALIDATION BEFORE GAME START

    const handleStartGame = () => {
        setheartArrforRender([1, 1, 1, 1, 1, 1])
        for (let i = 0; i < selectedWordArr.length; i++) {
            selectedWordPlayV.push('')
        }
        if (selectedWordArr.length == 4) {
            console.log('it has 4 length')
            let hintChar: string = selectedWordArr[randomInt3]
            for (let i = 0; i < selectedWordArr.length; i++) {
                if (selectedWordArr[i] == hintChar) {
                    selectedWordPlayV.splice(i, 1, hintChar)
                    console.log(selectedWordPlayV)
                    setselectedWordPlayForRender(selectedWordPlayV)
                    //setTriggerRender((prev) => !prev)
                    break
                }
            }
        }
        if (selectedWordArr.length == 5) {
            console.log('it has 5 length')
            let hintChar: string = selectedWordArr[randomInt4]
            console.log(hintChar)
            for (let i = 0; i < selectedWordArr.length; i++) {
                if (selectedWordArr[i] == hintChar) {
                    selectedWordPlayV.splice(i, 1, hintChar)
                    console.log(selectedWordPlayV)
                    setselectedWordPlayForRender(selectedWordPlayV)
                    //setTriggerRender((prev) => !prev)
                    console.log('IT PASSED THE RENDERED')
                }
            }
        }
        if (startRef.current) {
            startRef.current.style.display = 'none'
        }
        if (inputRef.current) {
            inputRef.current.style.display = 'block'
        }
        if (guessRef.current) {
            guessRef.current.style.display = 'block'
        }
        //setTriggerRender((prev) => !prev)
        setselectedWordPlayForRender(selectedWordPlayV)
    }

    //CODE BELOW HERE IS WHEN USER SUBMIT DATA
    const handleGuess = () => {
        let inputElement = document.getElementById(
            'input-typehere-id'
        ) as HTMLInputElement
        //COULD BE AN ERROR CONVERTING INTO UPPERCASE
        let userinput = inputElement.value.toUpperCase()
        if (userinput) {
            let inputCharArr = userinput.split('')
            if (inputCharArr.length > 1) {
                window.alert('Guess one character only!!')
                return
            } else {
                console.log(selectedWordPlayV)
                let wordForChecking = [...selectedWordPlayV]

                //Doing validation of how system adding userinput into wordBox
                for (let i = 0; i < selectedWordArr.length; i++) {
                    if (selectedWordArr[i] == userinput) {
                        selectedWordPlayV.splice(i, 1, userinput)
                        //setselectedWordPlayForRender(selectedWordPlayV)
                    }
                }

                //We checking if the player guess correct or not
                if (
                    wordForChecking.every(
                        (element, index) => element == selectedWordPlayV[index]
                    )
                ) {
                    window.alert('YOU LOSE 1 LIFE!!')

                    //We check if it only has 4 life we give a hint1
                    if (heartArr[1] == 0 && heartArr[2] == 1) {
                        setHint('Hint: ' + selectedWord.hint1)
                    } else if (heartArr[3] == 0 && heartArr[4] == 1) {
                        setHint('Hint: ' + selectedWord.hint2)
                    }
                    //We check if it only has 2 life we give a hint2
                    //For deleting player heart
                    //Check before delete it
                    let heartArrValidation = [0, 0, 0, 0, 0, 0]
                    if (
                        heartArr.every(
                            (element, index) =>
                                element == heartArrValidation[index]
                        )
                    ) {
                        console.log('PLAYER HAS NO MORE LIVE')
                        //redirect('/tryAgain')
                    } else {
                        console.log('PLAYER STILL HAVE LIFE')
                        for (let i = 0; i < heartArr.length; i++) {
                            if (heartArr[i] == 1) {
                                heartArr[i] = 0
                                console.log(heartArr)
                                let heartArrPrep = [...heartArr]
                                setheartArrforRender(heartArrPrep)
                                break
                            }
                        }
                    }
                } else {
                    let selectedWordPlayVPrep = [...selectedWordPlayV]
                    setselectedWordPlayForRender(selectedWordPlayVPrep)
                }

                //Last checking whether all box are filled or not
                for (let i = 0; i < selectedWordPlayV.length; i++) {
                    if (!selectedWordPlayV[i]) {
                        return
                    }
                }
                //REDIRECT IS NOT WORKING
                window.alert('THE PLAYER HAS WIN')
                //redirect('/Winnder-Winner-chicken-dinnner')
            }
        } else {
            window.alert('Please Guess something!')
        }
    }

    return (
        <ul className="main-con-page">
            <li className="title-page">
                <h1>GUESS THE WORD</h1>
                <ul className="cloud-con-abs">
                    <li className="cloud-element">
                        <Image
                            className="cloud-img-one"
                            src="/cloud.png"
                            width={100}
                            height={100}
                            alt="Cloud img"
                        />
                    </li>
                    <li className="cloud-element">
                        <Image
                            className="cloud-img-two"
                            src="/cloud.png"
                            width={100}
                            height={100}
                            alt="Cloud img"
                        />
                    </li>
                    <li className="cloud-element">
                        <Image
                            className="cloud-img-three"
                            src="/cloud.png"
                            width={100}
                            height={100}
                            alt="Cloud img"
                        />
                    </li>
                </ul>
            </li>
            <ul className="content-page">
                <ul className="content-leftside">
                    <ul className="content-wordbox-con">
                        {selectedWordPlayForRender.map((element) => {
                            return (
                                <li>
                                    <WordBox letter={element} />
                                </li>
                            )
                        })}
                    </ul>
                    <li className="content-btn-con">
                        <input
                            ref={inputRef}
                            id="input-typehere-id"
                            placeholder="Type Here"
                            className="content-btn-typehere"
                        />
                        <button
                            ref={guessRef}
                            className="content-btn-guess"
                            onClick={handleGuess}
                        >
                            Guess
                        </button>
                        <button
                            ref={startRef}
                            className="content-btn-start"
                            onClick={handleStartGame}
                        >
                            Start Now
                        </button>
                    </li>
                    <li>
                        <p>{hint}</p>
                    </li>
                </ul>
                <ul className="content-rightside">
                    {heartArrforRender.map((element) => {
                        return (
                            <li>
                                <Image
                                    src={'/' + element + '.png'}
                                    alt={''}
                                    width={75}
                                    height={75}
                                />
                            </li>
                        )
                    })}
                </ul>
            </ul>
        </ul>

        /*
        <ul className="man">
            <li className="head-man"></li>
            <li className="body-man"></li>
            <ul className="left-right-man hand">
                <li className="left-hand-man left-hand"></li>
                <li className="right-hand-man right-hand"></li>
            </ul>
            <ul className="left-right-man leg">
                <li className="left-hand-man left-hand"></li>
                <li className="right-hand-man right-hand"></li>
            </ul>
        </ul>
        */
    )
}
