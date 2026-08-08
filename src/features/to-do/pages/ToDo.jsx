import { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  // CREATE
  function addTask() {
    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      name: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  // DELETE
  function deleteTask(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  // UPDATE
  function toggleCompleted(id) {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  const filteredTasks = showCompleted
    ? tasks.filter((item) => item.completed)
    : tasks;

  return (
    <div style={{ width: 500, margin: "30px auto" }}>
      <h2>Todo App</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      <hr />

      <button onClick={() => setShowCompleted(false)}>All</button>

      <button onClick={() => setShowCompleted(true)}>Completed</button>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul style={{ textAlign: "left" }}>
          {filteredTasks.map((item) => (
            <li key={item.id}>
              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                  marginRight: 10,
                }}
              >
                {item.name}
              </span>

              <button onClick={() => toggleCompleted(item.id)}>
                {item.completed ? "Undo" : "Complete"}
              </button>

              <button onClick={() => deleteTask(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
