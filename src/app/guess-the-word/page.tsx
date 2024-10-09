import WordBox from '../component/wordBox/wordBox'
import Image from 'next/image'
import './guessTheWord.css'

export default function GuessPage() {
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
            <ul className="content-page"></ul>
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
