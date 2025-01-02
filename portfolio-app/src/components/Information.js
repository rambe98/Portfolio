import React from "react";
import "../css/Information.css";

function Information() {
  return (
    <section id="infomation">
      <h1>Information</h1>
      <div className="box-container">
        <div className="box">
          <h2>CHANNEL</h2>
          <p>
            <a
              href="https://github.com/rambe98"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/rambe98
            </a>
          </p>
        </div>
        <div className="box">
          <h2>CONTACTS</h2>
          <p>010-3327-3115</p>
          <p>rbgks33@gmail.com</p>
        </div>
        <div className="box">
          <h2>EDUCATION</h2>
          <p>2024.07 ~ 2025.01</p>  
          <p>코리아IT아카데미 <br/>AWS활용 풀스택 개발</p>
          <p>2017.02 ~ 2023.02</p>
          <p>유한대학교 <br/> 스마트콘텐츠과 전공</p>
        </div>
        <div className="box">
          <h2>WORK</h2>
          <p>2022.12 ~ 2024.03</p> 
          <p>게임덱스<br/> 모바일게임 운영 근무 <br/>GM 1년, PM 3개월</p>
        </div>
      </div>
    </section>
  );
}

export default Information;
