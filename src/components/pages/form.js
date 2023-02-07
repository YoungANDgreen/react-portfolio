import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { SiLinkedin } from "react-icons/si";
import { SiStackoverflow } from "react-icons/si";
import { SiGithub } from "react-icons/si";
//  template form from emailjs to handle form data submission to email to keep me up to date on who is contacting me
//  function that uses 'useRef' in place of 'useState' to handle email submissions with third party plugin emailjs.
function Contact() {
  const form = useRef();
  // function that uses emailjs to send email once form is submitted and handles errors in submission.
  const sendEmail = (e) => {
    e.preventDefault();
    // credentials for emailjs
    emailjs
      .sendForm(
        "service_flaty2s",
        "template_9sxl3ua",
        form.current,
        "aFULjaOigKuvjMpP4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // form that captures neccesary information on who is reaching out to contact me.
  return (
    <div>
    <Form ref={form} onSubmit={sendEmail} id="contact">
      <div>
        <h1>Contact Me</h1>
        <p>
          Submit your contact info and message so I can get back to you and keep
          in touch!
        </p>
      </div>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="user_name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="user_email"
        />
        <Form.Text className="text-muted">
          I will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" />
      </Form.Group>
      <Form.Select aria-label="Default select example">
        <option>Visitor type</option>
        <option value="1">Recruiter</option>
        <option value="2">Tacocat</option>
        <option value="3">Just stopping by</option>
      </Form.Select>
      <Button variant="primary" type="submit" value="Send">
        Submit
      </Button>

    </Form>
    <div id="footer">
        <Button
          id="footb"
          href="https://github.com/YoungANDgreen"
          variant="primary"
        >
          {" "}
          <SiGithub color="#020300" size={55} />
        </Button>
        <Button
          id="footb"
          href="https://www.linkedin.com/in/ryan-younggreen-3622b913b/"
          variant="primary"
        >
          {" "}
          <SiLinkedin color="#020300" size={55} />
        </Button>
        <Button
          id="footb"
          href="https://stackoverflow.com/users/21160819/younggreen"
          variant="primary"
        >
          {" "}
          <SiStackoverflow color="#020300" size={55} />
        </Button>
      </div>
    </div>
  );
}

export default Contact;
