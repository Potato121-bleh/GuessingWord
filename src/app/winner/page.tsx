'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import './winner.css'
import Link from 'next/link'

const winnerpage = () => {
    useEffect(() => {
        let congratSoundEff = new Audio('/audio/congratSoundEff.mp3')
        congratSoundEff.play()
    }, [])
    return (
        <div className="winner-con">
            <div className="backhome-con">
                <Link className="backhome-element" href="/welcome">
                    Back Home
                </Link>
            </div>
            <div className="img-winner">
                <Image
                    src="/winner.png"
                    width={300}
                    height={100}
                    alt="winner"
                />
            </div>
            <div className="speech-Box">
                <p>Congratulation!!!</p>
                <div className="speech-tail-winner"></div>
            </div>
            <Image
                className="ppwinner"
                src="/person.png"
                width={200}
                height={300}
                alt="person"
            />
        </div>
    )
}

export default winnerpage
