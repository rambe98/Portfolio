import React from "react";
import "../css/Project.css";
import projectThumbnail from "../image/KakaoTalk_20241211_103756459.png";
import projectThumbnail2 from "../image/UnrealEngine.svg";
import video1 from "../image/video/Waktron.mp4"; // 동영상 파일
import Modal from "./Modal";
import useModal from "./useModal";

function Projects() {
  const {
    isModalOpen,
    modalTitle,
    modalMessage,
    modalActions,
    openModal,
    closeModal,
  } = useModal();

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
        { url: "http://www.nayanong.site", text: "프로젝트 바로가기" },
        {
          url: "https://docs.google.com/spreadsheets/d/1cfhPAhxgoSSTt0Mr_6eZa3Z4JSX3FRCs0_GRCnQxJ0w/edit?gid=0#gid=0",
          text: "회의 및 정리사항",
        },
        {
          url: "https://docs.google.com/presentation/d/1BV3QbqTImwcl4Vcj4pRKuG88QDvZNodp/edit?usp=drive_link&ouid=110274912202184154568&rtpof=true&sd=true",
          text: "기술문서(진행중)",
        },
        {
          url: "https://github.com/rambe98/naya-nong/issues",
          text: "GITHUB 이슈 바로가기",
        },
      ],
    },
    {
      title: "3D Unreal Project",
      duration: "2022.9.1 ~ 2022.12.30",
      members: "3명 (팀장 및 blueprint 작업 담당)",
      roles: [
        "비행 가속도 구현",
        "중력 가속도 구현",
        "비행기 움직임 구현",
        "카메라 움직임 및 화면 비율 조정",
      ],
      thumbnail: projectThumbnail2,
      links: [
        { url: "https://github.com/rambe98/WakTron.main", text: "프로젝트 Github 바로가기" },
        
      ],
      video: video1, // 동영상 파일 추가
    },
  ];

  const handleVideoClick = (videoUrl) => {
    openModal({
      title: "프로젝트 동영상",
      message: (
        <>
                <video controls autoPlay style={{ width: "100%" }}>
          <source src={videoUrl} type="video/mp4" />
          브라우저가 동영상을 지원하지 않습니다.
        </video>
        </>

      ),
      actions: [{ label: "닫기", onClick: closeModal }],
    });
  };

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
            {project.links &&
                project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                ))}
              {project.video && (
                <button onClick={() => handleVideoClick(project.video)}>
                  프로젝트 동영상 보기
                </button>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* 모달 창 */}
      {isModalOpen && (
        <Modal
          title={modalTitle}
          content={modalMessage}
          actions={modalActions}
          onClose={closeModal}
        />
      )}
    </section>
  );
}

export default Projects;
