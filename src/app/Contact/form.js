
// 'use client'

// //This is my form which will be rendered into my contact page 
// //will contain name, email and message >> will be sent through email via api and I (or owner will get)



// import React, {useState} from "react";

// function contactForm () { 
//     const [name, setName] = useState ('');
//     const [email, setEmail] = useState ('');
//     const [message, setMessage] = useState ('');

//     const onSubmit = async (event) => {
//         event.preventDefault();
//         // console.log( 'data', name , email, message)
//         try {
//             const res = await fetch ('/api/contact', {
//                 method: 'POST', 
//                 body: JSON.stringify ({
//                     name, email, messgae
//                 }),
//                 headers:{
//                     'content-type': 'application/json'
//                 }
//         })

//         } catch (err){
//             console.error('Err', err)

//         }
//     }

//     return (
//       <form onSubmit={onSubmit}>
//         <input 
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name" type="text" className="text-black" ></input>
        
//         <input 
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email" type="email" className="text-black" ></input>
//         <textarea
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         className="text-black"></textarea>

//         <button className='text-black'type='submit'> Submit </button>
//       </form>
      
        
//     )
// }


// export default contactForm;



"use client"

export default function Form() {
  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => {
      e.preventDefault()
      const formData = new FormData(e.target)

      fetch('/api/email-send', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
    }}>
      <label className="text-black" htmlFor="name">Name</label>
      <input className="text-black" type="text" name="name" id="name" required />
      <label className="text-black" htmlFor="email">Email</label>
      <input className="text-black" type="email" name="email" id="email" required />
      <label className="text-black" htmlFor="message">Message</label>
      <textarea className="text-black" name="message" id="message" required></textarea>
      <button className="text-black" type="submit">Submit</button>
    </form>
  )
}
