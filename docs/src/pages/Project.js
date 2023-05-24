import PerfectWeekend from '../images/PerfectWeekend.png'
import PWATextEditor from '../images/PWATextEditor.png'
import EmployeeTracker from '../images/EmployeeTracker.png'
import TechBlog from '../images/TechBlog.png'
import WeatherDashboard from '../images/WeatherDashboard.png'
import TeamGenerator from '../images/TeamGenerator.png'

function Project() {
  return (
    <>
    <h1 className="project-h1">Feel free to click on any of the Project's 'App' links to view the deployed application or 'Github' to view their respective repositories!</h1>
    <div className="project-ctn">
      <figure className="project-fig">
        <p className="project-p">Weather Dashboard</p>
        <img className="project-img" src={WeatherDashboard} alt="Weather Dashboard"></img>
        <a className="project-link" href="https://danalexanderh.github.io/weather_api/">App</a>
        <a className="project-link" href="https://github.com/DanAlexanderH/weather_api">GitHub</a>
      </figure>

      <figure className="project-fig">
        <p className="project-p">TechBlog</p>
        <img className="project-img" src={TechBlog} alt="TechBlog"></img>
        <a className="project-link" href="https://murmuring-depths-77105.herokuapp.com/">App</a>
        <a className="project-link" href="https://github.com/DanAlexanderH/mvc-techblog">GitHub</a>
      </figure>

      <figure className="project-fig">
        <p className="project-p">Employee Tracker</p>
        <img className="project-img" src={EmployeeTracker} alt="Employee Tracker"></img>
        <a className="project-link" href="https://www.youtube.com/watch?v=beXwVrA6Nak">App</a>
        <a className="project-link" href="https://github.com/DanAlexanderH/EMPLOYEE_TRACKER">GitHub</a>
      </figure>

      <figure className="project-fig">
        <p className="project-p">PWA Text Editor</p>
        <img className="project-img" src={PWATextEditor} alt="PWA Text Editor"></img>
        <a className="project-link" href="https://glacial-headland-80951.herokuapp.com/">App</a>
        <a className="project-link" href="https://github.com/DanAlexanderH/text-editor-pwa">GitHub</a>
      </figure>

      <figure className="project-fig">
        <p className="project-p">Perfect Weekend</p>
        <img className="project-img" src={PerfectWeekend} alt="Perfect Weekend"></img>
        <a className="project-link" href="https://zachcygan.github.io/The-Perfect-Weekend/index.html">App</a>
        <a className="project-link" href="https://github.com/zachcygan/The-Perfect-Weekend">GitHub</a>
      </figure>

      <figure className="project-fig">
        <p className="project-p">Team Generator</p>
        <img className="project-img" src={TeamGenerator} alt="Team Generator"></img>
        <a className="project-link" href="https://www.youtube.com/watch?v=PrExaFl9pYs">App</a>
        <a className="project-link" href="https://github.com/DanAlexanderH/Team_Generator">GitHub</a>
      </figure>
    </div>
    </>
  )
}

export default Project