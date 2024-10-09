'use client'

import React, {useState} from "react";

function contactForm () { 
    const [name, setName] = useState ('');
    const [email, setEmail] = useState ('');
    const [message, setMessage] = useState ('');

    const onSubmit = (event) => {
        event.preventDefault();
        console.log( 'data', name , email, message)
    }

    return (
      <form onSubmit={onSubmit}>
        <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name" type="text" className="text-black" ></input>
        
        <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email" type="email" className="text-black" ></input>
        <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="text-black"></textarea>

        <button className='text-black'type='submit'> Submit </button>
      </form>
      
        
    )
}


export default contactForm;