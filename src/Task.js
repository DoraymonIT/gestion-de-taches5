import React, { useState } from 'react';

function Task({ task, updateTaskStatus, deleteTask, updateTaskTitle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  // Function to handle task title edits
  const handleEditTitle = () => {
    setIsEditing(true);
  };

  // Function to save edited task title
  const handleSaveTitle = () => {

    updateTaskTitle(task.id, editedTitle); // Call the updateTaskTitle function
    setIsEditing(false);
  };

  return (

    <li className="flex items-center justify-between p-2 border-b border-gray-200">
      <label className="flex items-center" >
        <input title={`${task.completed
          ? 'Marquer comme NON-COMPLET'
          : 'Marquer comme COMPLET'
          }`}
          type="checkbox"
          checked={task.completed}
          className="mr-6 text-green-400"
          onChange={() => updateTaskStatus(task.id, !task.completed)}

        />
        {isEditing ? (
          <>
            <input
              type="text"
              className="bg-gray-50 border text-sm border-gray-300 text-gray-900  p-2 rounded-lg w-full sm:w-3/4 mr-0 sm:mr-2 mb-2 sm:mb-0"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <button type="button" onClick={handleSaveTitle}><svg class="w-[15px] h-[15px] text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg></button>
          </>
        ) : (
          <>
            <div className={`${task.completed
              ? 'line-through ml-3 text-sm font-medium text-gray-800 dark:text-gray-300'
              : 'ml-3 text-sm font-medium text-gray-800 dark:text-gray-300'
              }`}
            >
              {task.title}    </div>

            {/* <button type="button" onClick={handleEditTitle}>Edit</button> */}
            {/* <button onClick={() => deleteTask(task.id)}>Supprimer</button> */}
          </>
        )}
      </label>
      <button
        type="button" onClick={handleEditTitle}
        className="text-green-300 hover:text-green-500 float-right"
      >

        <svg class="w-[15px] h-[15px] text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
          <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
        </svg>
      </button>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-300 hover:text-red-500"
      >

        <svg className="w-[15px] h-[15px] text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
        </svg>
      </button>
    </li>
  );
}

export default Task;
