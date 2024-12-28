
// // 'use client'

// // //This is my form which will be rendered into my contact page 
// // //will contain name, email and message >> will be sent through email via api and I (or owner will get)



// // import React, {useState} from "react";

// // function contactForm () { 
// //     const [name, setName] = useState ('');
// //     const [email, setEmail] = useState ('');
// //     const [message, setMessage] = useState ('');

// //     const onSubmit = async (event) => {
// //         event.preventDefault();
// //         // console.log( 'data', name , email, message)
// //         try {
// //             const res = await fetch ('/api/contact', {
// //                 method: 'POST', 
// //                 body: JSON.stringify ({
// //                     name, email, messgae
// //                 }),
// //                 headers:{
// //                     'content-type': 'application/json'
// //                 }
// //         })

// //         } catch (err){
// //             console.error('Err', err)

// //         }
// //     }

// //     return (
// //       <form onSubmit={onSubmit}>
// //         <input 
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //         placeholder="Name" type="text" className="text-black" ></input>
        
// //         <input 
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //         placeholder="Email" type="email" className="text-black" ></input>
// //         <textarea
// //         value={message}
// //         onChange={(e) => setMessage(e.target.value)}
// //         className="text-black"></textarea>

// //         <button className='text-black'type='submit'> Submit </button>
// //       </form>
      
        
// //     )
// // }


// // export default contactForm;



// "use client"

// import React from "react";

// export default function Form() {
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [message, setMessage] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // We're sending a POST request to the /api/contact API route.
//       // This API route is set up in the pages/api/contact.js file.
//       // The request contains the name, email and message in the body of the request as JSON.
//       // The API route will then handle the email sending logic.
//       // The response from the API route will be a JSON object with a status property.
//       // If the status is 200, the email was sent successfully, otherwise there was an error.
//       const response = await fetch("/api/email-send", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           message
//         })
//       });
//       if (response.status === 200) {
//         alert("Message sent successfully");
//         setName("");
//         setEmail("");
//         setMessage("");
//       } else {
//         alert("Error sending message");
//       }
//     } catch (error) {
//       alert("Error sending message");
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Your name"
//           className="text-black"
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Your email"
//           className="text-black"
//         />
//       </label>
//       <label>
//         Message:
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Your message"
//           className="text-black"
//         />
//       </label>
//       <button type="submit" className="text-black">Submit</button>
//     </form>
//   );
// }

"use client";

import {useState} from "react";


export default function Form() {

  //create usestate for the form where we will handle user data




  return (
    
    <Form>
      <label>
        Name:
        <input type="text" placeholder="Your name" className="text-black"></input>
      </label>
      

    </Form>


  );




};

