import React from 'react';
// import emailjs from 'emailjs-com';
// import Swal from 'sweetalert2'
import './Contact.css';

function ContactMe() {
//   const sendEmail = e => {
//     e.preventDefault();
//     emailjs.sendForm(
//         process.env.REACT_APP_SERVICE_ID,
//         process.env.REACT_APP_TEMPLATE_ID,
//         e.target,
//         process.env.REACT_APP_USER_ID)
//       .then((result) => {
//         Swal.fire({
//           icon: 'success',
//           title: 'Message Sent!',
//         })
//       }, (error) => {
//         Swal.fire({
//           icon: 'error',
//           title: 'Message failed to send.',
//         })
//       });
//     e.target.reset();
//   }

  return (
    <div id='contact-me'>
      <h3>Contact Me</h3>
      <div id='contact-me-form'>
        <form className="contact-form">
          <input type="hidden" name="contact_number" />
          <label>Full Name</label>
          <input type="text" name="from_name" placeholder='Full Name' required/>
          <label>Email Address</label>
          <input type="email" name="user_email" placeholder='Email' required/>
          <label>Message</label>
          <textarea name="message" placeholder="Let's connect :)" required/>
          <button className='bttn-slide slide_left' type="submit" value="Send" id='send-btn'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe;
