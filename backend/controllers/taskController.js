const taskModel = require("../models/taskModel");
//GET
module.exports.getTask = async (req, res) => {
  const Task = await taskModel.find();
  res.send(Task);
};

//POST
module.exports.saveTask = async (req, res) => {
  const { title, description } = req.body;
  taskModel.create({ title, description }).then((data) => {
    console.log("Added Successfully...");
    console.log(data);
    res.send(data);
  });
};

//UPDATE
module.exports.updateTask = async (req, res) => {
  const { _id, title, description } = req.body;
  taskModel
    .findByIdAndUpdate(_id, { title, description })
    .then(() => res.send("Updated Successfully....."))
    .catch((err) => console.log(err));
};

//DELETE
module.exports.deleteTask = async (req, res) => {
  const { _id } = req.body;
  taskModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully....."))
    .catch((err) => console.log(err));
};
