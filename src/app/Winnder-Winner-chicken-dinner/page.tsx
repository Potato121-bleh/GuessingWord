import Image from "next/image";
import React from "react";
import "./winner.css";

const winnerpage = () => {
  return (
    <div className="winner-con">
      <div className="img-winner">
        <Image src="/winner.png" width={300} height={100} alt="winner" />
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
  );
};

export default winnerpage;
