import Image from "next/image";
import React from "react";
import "./developer.css";

const developer = () => {
  const developers = [
    { id: 1, name: "Ly Sochetra", role: "System Developer" },
    { id: 2, name: "Hem Theavin", role: "UI Developer" },
    { id: 3, name: "Ra Kimly", role: "Data Writer" },
    { id: 4, name: "Tang Hokheng", role: "UI Assist" },
  ];
  return (
    <div className="developer-page">
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
      <div className="info">
        <h1 className="title">Developer</h1>
        <ul className="developer-info-con">
          {developers.map((dev) => (
            <li className="developer-info" key={dev.id}>
              <div className="developer-item">
                <Image src="/arrow.png" width={80} height={80} alt="arrow" />
                <span className="number">{dev.id}</span>
              </div>
              <div className="developer-name">
                <h2>{dev.name}</h2>
                <p>{dev.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default developer;
