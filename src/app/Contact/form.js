
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