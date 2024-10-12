'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import './tryAgain.css'
import Link from 'next/link'

const tryPage = () => {
    useEffect(() => {
        let suspenseSoundEff = new Audio('/audio/suspenseSoundEffect.mp3')
        suspenseSoundEff.play()
    }, [])

    return (
        <div className="loser-con">
            <div className="backhome-con">
                <Link className="backhome-element" href="/welcome">
                    Back Home
                </Link>
            </div>
            <div className="img-loser">
                <Image src="/lose.png" width={300} height={100} alt="winner" />
            </div>
            <div className="speech-Box">
                <p>Try Again!!!</p>
                <div className="speech-tail-loser"></div>
            </div>
            <Image
                className="pploser"
                src="/person.png"
                width={200}
                height={300}
                alt="person"
            />
        </div>
    )
}

export default tryPage
