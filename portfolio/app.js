const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/wp");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("MongoDB connected");
});

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Message = mongoose.model("Message", messageSchema);
// app.set("view engine", "html");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res)=> {
  res.send("<h1><a href='/homepage.html'>Go to HomePage</a></h1>")
})

app.get("/homepage.html", (req, res) => {
  res.sendFile(__dirname + "/views/homepage.html");
});

app.get("/contact.html", (req, res) => {
  res.sendFile(__dirname + "/views/contact.html");
});

app.get("/about.html", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});


app.get("/education.html", (req, res) => {
  res.sendFile(__dirname + "/views/education.html");
});


app.get("/experience.html", (req, res) => {
  res.sendFile(__dirname + "/views/experience.html");
});


app.get("/projects.html", (req, res) => {
  res.sendFile(__dirname + "/views/projects.html");
});

app.post("/submit", async (req, res) => {
  const { name, email, message } = req.body;
  const newMessage = new Message({
    name,
    email,
    message,
  });

  try {
    await newMessage.save();
    console.log("Data inserted into MongoDB");
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
