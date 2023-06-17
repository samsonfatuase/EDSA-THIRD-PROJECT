import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

function TaskItem() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      setTasks(storedList);
    }
  }, []);

  const handleToggleComplete = (task) => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem("localTasks", JSON.stringify(updatedTasks));
  };

  const handleDelete = (task) => {
    const deleted = tasks.filter((t) => t.id !== task.id);
    setTasks(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted));
  };

  const handleClear = () => {
    setTasks([]);
    localStorage.removeItem("localTasks");
  };

  return (
    <div>
      {tasks.map((task) => (
        <div  key={task.id} className={task.completed ? "completed" : ""}>
          <div id="form">{task.title}</div>
          <div>
            <button className="btn" onClick={() => handleDelete(task)}>Delete</button>
            <button className="btn btn-primary" onClick={() => handleToggleComplete(task)}>
              {task.completed ? (
                <FaCheck style={{ color: "white" }} />
              ) : (
                <span>Incomplete</span>
              )}
            </button>
          </div>
        </div>
      ))}
      {!tasks.length ? null : (
        <div>
          <button className="btn" onClick={handleClear}>Clear</button>
        </div>
      )}
    </div>
  );
}

export default TaskItem;




