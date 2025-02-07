import { useEffect } from "react";
import "../static/styles/common/resume.css";

function Resume() {
  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/19EwcyrWnL7H6x_HtCieXFjNImxGAoHOI/view?usp=sharing";
  }, []);

  return (
    <div className="resume-container section typewriter">
      <h2>Getting Resume...</h2>
    </div>
  );
}

export default Resume;
