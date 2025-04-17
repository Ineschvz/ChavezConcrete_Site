'use client';

import { useState } from "react";
import React, { FormEvent } from 'react';






export default function Form() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello", name)
 
    if (!name) {
      alert("Please fill out all fields");
      return;
    } 
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    if (res.status === 200) {
      alert("Email sent successfully");
    } else {
      alert("Error sending email");
    }

  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            className="border border-gray-400 p-2 text-black ml-2"
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            className="border border-gray-400 p-2 text-black ml-2"
            id="email"
            type="text"
            placeholder="iM7Pm@example.com"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Message:
          <input
            className="border border-gray-400 p-2 text-black ml-2"
            id="message"
            type="text"
            placeholder="..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

// <form>

//   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//    click me 
//   </button>
  
// </form>

{/* <label className="text-black">
      Name:
    <input className="border border-gray-400 p-2 text-black" id="name" placeholder="John Doe"></input>
    <div className="error-txt" style={{display: 'none'}}> Name can not be empty</div>
    </label>
    <label className="text-black">
      Email:
    <input className="border border-gray-400 p-2 text-black" id="email" placeholder="iM7Pm@example.com"></input>
    <div className="error-txt" style={{display: 'none'}}> Email can not be empty</div>
    </label>
    <label className="text-black">
      Message:
    <input className="border border-gray-400 p-2 text-black" id="message" placeholder="Enter your message here"></input>
    <div className="error-txt" style={{display: 'none'}}> Message can not be empty</div>
    </label>

<button
  type="button"
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  onClick={() => {
    try {
      const formData = {
        name: document.querySelector('input[id="name"]').value,
        email: document.querySelector('input[id="email"]').value,
        message: document.querySelector('input[id="message"]').value,
      };
      if (!formData.name || !formData.email || !formData.message) { 
        alert("Please fill out all fields before submitting.");
        return;
      }
      const mailtoLink = "mailto:chavezconcreteworkinc@yahoo.com" +
  "?cc=" + encodeURIComponent(formData.email) +
  "&subject=" + encodeURIComponent("Contact Form Submission") +
  "&body=" + encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);

window.location.href = mailtoLink;

      console.log("Email link opened successfully");
    } catch (error) {
      console.error("Error creating email link: ", error);
    }
  }}
  
 >
  Submit
</button>
 */}
