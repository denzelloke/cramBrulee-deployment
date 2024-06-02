const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb");

const templatePath = path.join(__dirname, "../templates"); //tells code that the views folder is called "templates"

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath); //tells code that the views folder is called "templates"
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

// signup form that stores name and pw into database
app.post("/signup", async (req, res) => {
  try {
    const data = {
      name: req.body.name, //fetches user input
      password: req.body.password,
    };

    await collection.insertMany([data]); //creates a data???
    res.render("home"); //redirect to home page
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send("unknown error");
  }
});

//dictates signup action
app.post("/login", async (req, res) => {
  //fetch user input for name and pw. if match in database then allow to render homepage
  try {
    const check = await collection.findOne({ name: req.body.name });
    if (check.password === req.body.password) {
      res.render("home"); //redirect to home page
    } else {
      res.send("username exists, incorrect password");
    }
  } catch {
    res.send("incorrect credentials");
  }
});

app.listen(3000, () => {
  console.log("port connected");
});
