import React from 'react';

function Task({ task, updateTaskStatus, deleteTask }) {
  return (
    <li className="flex items-center justify-between p-2 border-b border-gray-200">
      <label className="flex items-center" title={`${task.completed
        ? 'Marquer comme NON-COMPLET'
        : 'Marquer comme COMPLET'
        }`}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => updateTaskStatus(task.id, !task.completed)}
          className="mr-6 text-green-400"

        />

        <div className={`${task.completed
          ? 'line-through ml-3 text-sm font-medium text-gray-800 dark:text-gray-300'
          : 'ml-3 text-sm font-medium text-gray-800 dark:text-gray-300'
          }`}
        >
          {task.title}    </div>
      </label>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-300 hover:text-red-500"
      >
        {/* Supprimer */}
        <svg class="w-[15px] h-[15px] text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
        </svg>
      </button>
    </li>
  );
}

export default Task;
