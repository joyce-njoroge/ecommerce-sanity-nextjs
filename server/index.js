const express = require("express");

//const cors = require("cors"); // Import the cors middleware

const app = express();
//const axios = require("axios");
const cors = require("cors");

//const { createToken } = require("../lib/token"); 
const TokenRoute = require("../app/api/[storeId]/checkout/token");


app.listen(5000, () => {
  console.log("server run nicely2");
});

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Mpesa programming in progress,Time to get paid nigga!");
});

// const corsOptions = {
//   origin: "http://localhost:3001", 
// };

// app.post("/",createToken,postStk) 
// app.post("/token", (req, res) => {
//     createToken()
// })

app.post("/callback", (req, res) => {
  const callbackData = req.body;
  console.log(callbackData.Body);
  if (!callbackData.Body.stkCallback.CallbackMetadata) {
    console.log(callbackData.Body);
    return res.json("okay");
  }

  console.log(callbackData.Body.stkCallback.CallbackMetadata);
});

app.use("/token", TokenRoute);
//app.use(cors(corsOptions));