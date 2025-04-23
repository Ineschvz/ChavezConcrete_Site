'use client';

import { useState } from "react";
import React, { FormEvent } from 'react';






export default function Form() {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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
        lastName,
        phone,
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center">
        <label className="">
          Name:
          <input
            className="border border-gray-400 p-2 text-black w-full"
            id="name"
            type="text"
            placeholder="First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="">
          Last Name:
          <input
            className="border border-gray-400 p-2 text-black w-full"
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>

        </div>
        <label className="">
          Phone:
          <input
            className="border border-gray-400 p-2 text-black w-full"
            id="phone"
            type="text"
            placeholder="Phone Number"  
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>

        <label className="">
          Email:
          <input
            className="border border-gray-400 p-2 text-black w-full"
            id="email"
            type="text"
            placeholder="Email Address"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="">
          Message:
          <input
            className="border border-gray-400 p-2 text-black w-full"
            id="message"
            type="text"
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded ">
        Submit
      </button>
    </form>
  );
};

