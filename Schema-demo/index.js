const mongoose = require("mongoose");

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/schemaDemoDB")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));


// CREATE SCHEMA
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});


// CREATE MODEL
const User = mongoose.model("User", userSchema);


// INSERT DATA
const insertData = async () => {
  try {
    const user = new User({
      name: "Hengky",
      email: "hengky@mail.com",
      age: 21,
    });

    await user.save();
    console.log("Data inserted successfully");

  } catch (error) {
    console.log(error);
  }
};


// FETCH DATA
const getData = async () => {
  try {
    const users = await User.find();
    console.log("Data from database:");
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

const runApp = async () => {
  await insertData();
  await getData();
};

runApp();
