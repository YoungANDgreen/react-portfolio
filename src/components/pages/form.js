import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
//  template form from emailjs to handle form data submission to email to keep me up to date on who is contacting me
//  function that uses 'useRef' in place of 'useState' to handle email submissions with third party plugin emailjs.
function Form() {
    const form = useRef();
// function that uses emailjs to send email once form is submitted and handles errors in submission.
    const sendEmail = (e) => {
        e.preventDefault();
        // credentials for emailjs 
        emailjs.sendForm('service_flaty2s', 'template_9sxl3ua', form.current, 'aFULjaOigKuvjMpP4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

// form that captures neccesary information on who is reaching out to contact me.
    return (
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <h1>Contact Me</h1>
                <p>Submit your contact info and message so I can get back to you and keep in touch!</p>
            </div>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>



    );
};

export default Form