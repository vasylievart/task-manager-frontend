import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {auth, logout} = useContext(AuthContext);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/tasks', {title, description});
    setTasks([...tasks, response.data]);
    setTitle('');
    setDescription('');
  };

  const deleteTask = async (id) => {
    await axios.delete('/api/tasks/${id}');
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
        />
        <button type = "submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title}
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;