import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === '') return; // Don't add an empty task
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };
    addTask(newTask);
    setTaskTitle(''); // Reset the input field after adding
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Add a Task</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
        <input
          type="text"
          placeholder="New task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="bg-gray-50 border text-sm border-gray-300 text-gray-900  p-2 rounded-lg w-full sm:w-3/4 mr-0 sm:mr-2 mb-2 sm:mb-0"
        />
        {/* <input type="text"
          placeholder="New task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> */}

        <br />
        <button onClick={handleSubmit}
          type="submit"
          className="text-gray-900 bg-white border border-gray-300 font-medium   px-5 py-2.5  rounded-lg inline-flex sm:w-auto text-sm  mr-2"
        >
          <svg className="w-4 h-4 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Add
        </button>
        {/* <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
  </svg>
  Sign in with Facebook
</button> */}

      </form>
    </div>
  );
}

export default TaskForm;
