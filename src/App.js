import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import SearchBar from './SearchBar';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [displayNoneMessage, setDisplayNoneMessage] = useState(false); // Flag to control "none" message display
  const [filterStatus, setFilterStatus] = useState('all'); // Added filterStatus state
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (taskId, completed) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const filterTasks = (searchTerm, statusFilter) => {
    const filtered = tasks.filter((task) => {
      const nameMatch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
      const statusMatch =
        statusFilter === 'all' ||
        (statusFilter === 'completed' && task.completed) ||
        (statusFilter === 'not-completed' && !task.completed);

      return nameMatch && statusMatch;
    });

    setFilteredTasks(filtered);
    setDisplayNoneMessage(filtered.length === 0 && searchTerm.trim() !== '');
  };

  // Function to filter tasks by name and status
  const filterByNameAndStatus = (searchTerm, statusFilter) => {
    setSearchTerm(searchTerm);
    setFilterStatus(statusFilter);
    filterTasks(searchTerm, statusFilter);
  };

  // Function to update the title of a task
  const updateTaskTitle = (taskId, newTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: newTitle } : task
    );

    setTasks(updatedTasks);
  };


  return (

    <>

      <div className="min-h-screen flex flex-col justify-center items-center p-4 border-gray-200 rounded-lg shadow ">

        <h1 className="text-3xl font-medium text-gray-900 dark:text-white mb-6">
          Gestion des Tâches
        </h1>
        <form className="w-full max-w-md space-y-6">
          <SearchBar filterStatus={filterStatus} filterByNameAndStatus={filterByNameAndStatus} searchTerm={searchTerm}/>

          <TaskForm addTask={addTask} />
          {displayNoneMessage ? (
            <p className="text-gray-500 dark:text-gray-400 text-center m-3">Liste Vide</p>
          ) : (
            <TaskList
              tasks={filteredTasks.length > 0 ? filteredTasks : tasks}
              updateTaskStatus={updateTaskStatus}
              deleteTask={deleteTask}
              updateTaskTitle={updateTaskTitle}
            />
          )}
        </form>
      </div>

    </>


  );
}

export default App;
