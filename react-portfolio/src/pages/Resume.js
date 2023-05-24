import resume from "../images/resume.png"

function Resume() {
  return (
    <div className="resume-ctn">
        <p className="resume-p">Click to view my resume!</p>
        <a href="https://docs.google.com/document/d/1-DBxaGXoYrNm1yMR5Vsx0YYzFJUsC4xk_FXPO4Ivte8/edit#heading=h.ymi089liagec"><img className="resume-image" src={resume} alt="Resume"></img></a>
        <h3 className="expertise-title">Expertise</h3>
          <ul className="expertise-list">
            <li>Javascript</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Node / Express</li>
          </ul>


    </div>
  )
}

export default Resume