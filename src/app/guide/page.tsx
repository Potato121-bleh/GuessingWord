import Image from 'next/image'
import React from 'react'
import './guide.css'
import Link from 'next/link'

const guidePage = () => {
    return (
        <div className="guidepage-con">
            <div className="backhome-con">
                <Link className="backhome-element" href="/welcome">
                    Back Home
                </Link>
            </div>
            <div className="cloud-con">
                <Image
                    className="first-cloud"
                    src="/cloud.png"
                    width={260}
                    height={100}
                    alt="cloud"
                />
                <Image
                    className="second-cloud"
                    src="/cloud.png"
                    width={260}
                    height={100}
                    alt="cloud"
                />
                <Image
                    className="third-cloud"
                    src="/cloud.png"
                    width={260}
                    height={100}
                    alt="cloud"
                />
            </div>
            <div className="content">
                <div className="star">
                    <Image
                        src="/star.png"
                        width={150}
                        height={100}
                        alt="star"
                    />
                </div>
                <div className="textBox">
                    <div className="title">HOW TO PLAY</div>
                    <p>
                        You have 6 lives to guess. If you run out of lives
                        before completing the word, you are DEAD.
                    </p>
                    <div className="speech-tail"></div>
                </div>
                <div className="person">
                    <Image
                        src="/person.png"
                        width={150}
                        height={250}
                        alt="person"
                    />
                </div>
            </div>
        </div>
    )
}

export default guidePage
