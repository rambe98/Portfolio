import React from "react";
import VolunteerImage from "../image/mypic.jpg";
import "../css/ME.css"

function ME() {
  return (
    <section id="Me">
      <div className="ME-container">
        <div className="ME-box">
          <div className="ME-image">
            <img src={VolunteerImage} alt="profile" />
          </div>
          <div className="ME-text">
            <h1>오규한 | 백엔드 개발자</h1>
            <p>도전적인 문제 해결을 즐기는 오규한입니다.<br/>
            프로젝트를 진행하면 항상 팀장역할을 도맡아 하며<br/>
            팀원들간의 소통창구가 되어줄 수 있을 정도로<br/> 
            좋은 커뮤니케이션 능력을 가지고 있습니다.<br/>
            지속적인 학습과 성장을 통해 더 나은 개발자가 되기 위해 노력하는 사람입니다.</p>
            <a><br/>좌우명: 스트레스는 날 더 강하게</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ME;