const express = require('express');
const path = require('path');
const UserDetails = require("./config");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up EJS rendering
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
  res.render("home");
});


app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  try {
    const userData = new UserDetails({
      name: req.body.username,
      mobilenum: req.body.mobileno,
      address: req.body.address,
      email: req.body.email
    });
    await userData.save();
    // Redirect to complaint page after successful registration
    res.redirect("/complaint");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error registering user");
  }
});

app.get("/complaint", (req, res) => {
  res.render("complaint");
});

app.get("/final", (req, res) => {
  res.render("final");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
