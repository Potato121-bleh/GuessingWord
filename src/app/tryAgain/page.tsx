import Image from "next/image";
import React from "react";
import "./tryAgain.css";

const tryPage = () => {
  return (
    <div className="loser-con">
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
  );
};

export default tryPage;
