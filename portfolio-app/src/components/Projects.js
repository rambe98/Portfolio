import React from "react";
import "../css/Project.css";
import projectThumbnail from "../image/KakaoTalk_20241211_103756459.png"; // 경로 확인!

function Projects() {
  const projectData = [
    {
      title: "농산물유통 종합정보시스템 웹&앱",
      duration: "2024.11.13 ~ 2024.12.26",
      members: "4명 (팀장 및 BACKEND 담당)",
      roles: [
        "프로젝트 일정 관리 및 작업 분배",
        "CRUD API 기능 구현",
        "GITHUB 이슈 관리",
        "AWS 배포",
        "프로젝트 문서화 및 최종 발표 준비",
      ],
      thumbnail: projectThumbnail,
      links: [
        { url: "http://www.nayanong.site", text: "프로젝트 바로가기" }, // 프로젝트 보기 링크 수정
        {
          url: "https://docs.google.com/spreadsheets/d/1cfhPAhxgoSSTt0Mr_6eZa3Z4JSX3FRCs0_GRCnQxJ0w/edit?gid=0#gid=0",
          text: "회의 및 정리사항",
        },
        { url: "https://docs.google.com/presentation/d/1BV3QbqTImwcl4Vcj4pRKuG88QDvZNodp/edit?usp=drive_link&ouid=110274912202184154568&rtpof=true&sd=true",
          text: "기술문서(진행중)" },
        { url: "https://github.com/rambe98/naya-nong/issues",
          text: "GITHUB 이슈 바로가기" },
      ],
    },
  ];

  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <article key={index}>
            <div className="image-text">
              <img src={project.thumbnail} alt={`project-thumbnail-${index}`} />
              <p>{project.title}</p>
            </div>
            <div className="project-details">
              <h3>프로젝트 개요</h3>
              <p>개발기간: {project.duration}</p>
              <p>개발인원: {project.members}</p>
              <p>담당역할:</p>
              <ul>
                {project.roles.map((role, roleIndex) => (
                  <li key={roleIndex}>{role}</li>
                ))}
              </ul>
            </div>
            <div className="project-links">
              {project.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </article>
        ))}
        {projectData.map((project, index) => (
          <article key={index}>
            <div className="image-text">
              <p>작성중</p>
            </div>
            <div className="project-details">
              <h3>프로젝트 개요</h3>
              <p>개발기간:</p>
              <p>개발인원:</p>
              <p>담당역할:</p>
              <ul>

              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects; // 기본 내보내기 추가!
