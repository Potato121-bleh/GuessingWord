import WordBox from '../component/wordBox/wordBox'
import './guessTheWord.css'

export default function GuessPage() {
    return (
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
    )
}
