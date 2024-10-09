import './wordBoxComponent.css'

type WordBoxType = {
    letter: string
}

export default function WordBox({ letter }: WordBoxType) {
    return (
        <div className="main-con">
            <div className="sub-con">
                <h1>{letter}</h1>
            </div>
        </div>
    )
}
