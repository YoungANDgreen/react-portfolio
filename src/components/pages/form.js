import React, { useState } from 'react';

function Form() {
    // Set my state variables for the form 
    const [firstName, setFirstName] =useState('');
    const [lastName, setLastName] =useState('');
    const [email, setEmail] =useState('');
    const [comment, setComment] =useState('');

    const handleInput = (e) => {
        // Retrieves the value of the input based on which variable is being input into.
        const { name, value } = e.target;

        // if else statement that handles the 
        if (name == 'firstName') {
            setFirstName(value)
        } else if (name == 'lastName') {
            setLastName(value)
        } else if (name == 'email') {
            setEmail(value)
        } else {
            setComment(value)
        };
    };

    const handleSubmit = (e) => {
        // prevent default which is to refresh page on form submit.
        e.preventDefault();

        // Generates alert for the user upon succesful completion of form + submit
        alert(`Hi ${firstName} ${lastName} thank you for submitting!`);
        setFirstName('');
        setLastName('');
        setEmail('');
        setComment('');
    };

    return (
        <div>
          <p>
            Hello {firstName} {lastName}
          </p>
          <form className="form">
            <input
              value={firstName}
              name="firstName"
              onChange={handleInput}
              type="text"
              placeholder="First Name"
            />
            <input
              value={lastName}
              name="lastName"
              onChange={handleInput}
              type="text"
              placeholder="Last Name"
            />
             <input
              value={email}
              name="email"
              onChange={handleInput}
              type="text"
              placeholder="Email"
            />
            <input
              value={comment}
              name="comment"
              onChange={handleInput}
              type="text"
              placeholder="Comment"
            />
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      );

}

export default Form;