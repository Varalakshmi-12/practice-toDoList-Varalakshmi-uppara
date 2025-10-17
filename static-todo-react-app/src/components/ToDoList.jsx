import React from 'react';

const ToDoList = () => {
    const tasks = ["Learn React","Build a project", "Read documentation"];
    return (
        
     <ul className="todo-list">
        
        {tasks.map((task ,index)=>(
            <li key={index} className="todo-item"> {task} </li>
        ))}
       
    
    </ul>
    );

};
export default ToDoList;