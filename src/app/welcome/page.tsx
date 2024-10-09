import React from "react";
import Image from "next/image";
import "./welcome.css";

const welcomepage = () => {
  return (
    <div className="welcome-con">
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
    </div>
  );
};

export default welcomepage;
