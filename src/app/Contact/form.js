'use client';

export default function Form() {


return (
  <form>
    <label className="text-black">
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
  </form>

);
};


