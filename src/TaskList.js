import React from 'react';
import Task from './Task';

function TaskList({ tasks, updateTaskStatus, deleteTask ,updateTaskTitle}) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Liste des Tâches</h2>
      <ul className="divide-y divide-gray-300">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            updateTaskStatus={updateTaskStatus}
            deleteTask={deleteTask}
            updateTaskTitle={updateTaskTitle}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
