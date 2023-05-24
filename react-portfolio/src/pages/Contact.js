
function Contact() {
  return (
    <div className="contact-ctn">
      <h1 className="contact-h1">Get in touch with me!</h1>
      <p className="form-p">Fill out this form to get in touch with me!</p>
      <form className="form-ctn">
        <h2>Contact Form</h2>

        {/* <label for="fname">First Name</label> */}
        <input type="text" id="fname" name="firstname" placeholder="First Name"></input>

        {/* <label for="lname">Last Name</label> */}
        <input type="text" id="lname" name="lastname" placeholder="Last Name"></input>

        {/* <label for="email">Email</label> */}
        <input type="text" id="email" name="email" placeholder="Email"></input>
{/* 
        <label for="message">Message</label> */}
        <textarea id="message" name="message" placeholder="Type your message here..."></textarea>

        <button className="form-btn" >Submit</button>
      </form>
    </div>
  )
}

export default Contact