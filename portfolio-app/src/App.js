import React from "react";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills"; // 정확한 경로 확인
import Projects from "./components/Projects";
import Footer from "./components/Footer"; // 정확한 경로 확인
import ME from "./components/ME";
import Information from "./components/Information";

const App = () => {
  return (
    <div>
      <Navbar/>
      <ME/>
      <Information/>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
