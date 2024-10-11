import React from "react";
import Image from "next/image";
import "./welcome.css";
import Link from "next/link";

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
      <div className="title-wel">
        <h1>GUESS</h1>
      </div>
      <div className="menu-con">
        <ul className="person">
          <li>
            <Image src="/person.png" width={180} height={300} alt="person" />
          </li>
        </ul>
        <ul className="menu-info">
          <Link href="/developer">
            <li className="menu-Developer">Developer</li>
          </Link>
          <Link href="/guide">
            <li className="menu-howToPlay"> How To Play</li>
          </Link>
          <Link href="/">
            <li className="menu-start"> Start Now</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default welcomepage;
