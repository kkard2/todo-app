import React from "react";
function TodoItem({task,toggleCompleted}) {
    function handleChange() {
        toggleCompleted(task.id)
    }
    return (
        <div className="todo-item">
            <input type="checkbox"
            checked={task.completed}
            onChange={handleChange}/>
            <p>{task.text}</p>

        </div>
    )
}
export default TodoItem