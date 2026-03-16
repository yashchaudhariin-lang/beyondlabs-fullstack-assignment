import { useState, useEffect } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
    
  },[]);
  const addTask = async () => {
    const res = await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  return (
    <>
      <h1>Task manager</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="new task "
      ></input>
      <button onClick={addTask}>Add task</button>
      <ul>
        {tasks.map((task) => {
         return <li key={task.id}>{task.title}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
