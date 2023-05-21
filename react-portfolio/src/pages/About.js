import profilePhoto from '../images/profilePhoto.png'

function About() {
  return (
  <>
       <h2 className="about-h2">About Me</h2>
    <main className="about-ctn">
        <p className="about-p">My name is Daniel Alexander Hernandez. I am a full stack web developer and current student at UCI Coding Bootcamp. 
          I am eager to learn new skills and produce amazing applications. I am a team player and excited for my future in programming. 
          Please feel free to use the tabs located at the top of the page to see the projects that I am working on or completed.
          </p>
       <img className="profile-pic" src={profilePhoto} alt="Profile Img"/>   
    </main>
  </>

  )
}

export default About