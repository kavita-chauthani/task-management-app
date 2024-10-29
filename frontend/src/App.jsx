import { useEffect, useState } from "react";
import "./App.css";
import { ToDo } from "./components/ToDo";

import Axios from "axios";

export const App = () => {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");

  const getTask = async () => {
    const response = await Axios.get("https://task-management-app-8cha.onrender.com/");
    setTask(response.data);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Task Management App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add Task.."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="add">Add Task</div>
        </div>
        <div className="list">
          {task.map((item) => (
            <ToDo
              key={item._id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
