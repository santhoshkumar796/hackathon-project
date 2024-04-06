const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb://localhost:27017/project-pathole")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobilenum: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required:true
  },
   
});

const UserDetails = mongoose.model("UserDetails", loginSchema);

module.exports = UserDetails;
