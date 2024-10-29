import axios from "axios";

const baseUrl = "https://task-management-app-8cha.onrender.com";

const getAllToDo = (setTask) => {
  axios.get(baseUrl).then((data) => {
    console.log("data", data);
    setTask(data);
  });
};

export { getAllToDo };
