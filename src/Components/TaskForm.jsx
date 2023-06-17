import React, { useState, useEffect } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
      if(localStorage.getItem("localTasks")){
          const storedList = JSON.parse(localStorage.getItem("localTasks"));
          setTasks(storedList);
      }
  },[])

  const addTask = (e) => {
    if (task) {
      const newTask = { id: new Date().getTime().toString(), title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };


  return (
    <div className="App">
      <h1 id="myApp">MY TASKS APP</h1>
      <div>
        <input
          id="form"
          name="task"
          type="text"
          value={task}
          placeholder="Enter Your Task"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div >
        <button className="btn btn-primary" onClick={addTask} >
          submit
        </button>
      </div>
    </div>
      );
      }
      