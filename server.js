const cors = require ("cors");
const express = require("express");
const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());




app.post("/Contact", (req, res) => {
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email and message are required" });
    }
  
    console.log("Received name:", name, "email:", email, "message:", message);
    res.status(200).json({ message: `Thanks, ${name}, we got your email and message.` });
  });
  


  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));