import axios from "axios";

const baseUrl = "http://localhost:8082";

const getAllToDo = (setTask) => {
  axios.get(baseUrl).then((data) => {
    console.log("data", data);
    setTask(data);
  });
};

export { getAllToDo };
