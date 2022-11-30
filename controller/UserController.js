var db = require("../models/users");
const Users = db.users;

//add another field in thd datadbade to our schema

var addUser = async (req, res) => {
  // one way
  //   let data = await users.build({
  //     name: "test",
  //     email: "qwer123@gmail.com",
  //     age: "24",
  //     password: "qwer123",
  //     gender: "male",
  //   });
  //   await data.save();

  //orr 2n way

  let data = await Users.create({
    name: "test",
    email: "qwer123@gmail.com",
    age: "24",
    password: "qwer123",
    gender: "male",
  });
  await data.save();
  let response = {
    data: "ok",
  };
  res.status(200).json(response);
};

module.exports = {
  addUser,
};
