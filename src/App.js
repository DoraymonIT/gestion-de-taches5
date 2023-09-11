import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [displayNoneMessage, setDisplayNoneMessage] = useState(false); // Flag to control "none" message display

  // useEffect(() => {
  //   setDisplayNoneMessage(tasks.length === 0);
  // }, []);

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

  const filterTasks = (searchTerm) => {
    const filtered = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (task.completed && searchTerm.toLowerCase() === 'completed') ||
        (!task.completed && searchTerm.toLowerCase() === 'incomplete')
    );

    setFilteredTasks(filtered);
    setDisplayNoneMessage(filtered.length === 0);
  };

  return (

    <>

      <div className="min-h-screen flex flex-col justify-center items-center p-4 border-gray-200 rounded-lg shadow ">

        <h1 className="text-3xl font-medium text-gray-900 dark:text-white mb-6">
          Gestion des Tâches
        </h1>
        <form className="w-full max-w-md space-y-6">
          <div className="p-4">
            <div className="mb-4 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by name or status"
                onChange={(e) => filterTasks(e.target.value)}
              />
            </div>
          </div>
          <TaskForm addTask={addTask} />
          {displayNoneMessage ? (
            <p className="text-gray-500 dark:text-gray-400 text-center m-3">Liste Vide</p>
          ) : (
            <TaskList
              tasks={filteredTasks.length > 0 ? filteredTasks : tasks}
              updateTaskStatus={updateTaskStatus}
              deleteTask={deleteTask}
            />
          )}
        </form>
      </div>

    </>


  );
}

export default App;
