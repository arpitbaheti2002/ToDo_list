import React, { useState } from "react";
import Heading from "./Heading";

function List(){
  const [inputText, setInput] = useState("");
  const [tasks, updateTasks] = useState([]);

  function handleChange(event){
    setInput(event.target.value);
  }

  function handleKey(event){
    if(event.key === 'Enter'){
      addTasks();
    }
  }

  function addTasks(){
    updateTasks(prevValue => {return([...prevValue, inputText]);})
    setInput("");
  }

  function deleteTask(event) {
    const updatedTasks = tasks.filter((task) => task !== event.target.value);
    console.log(event.target.value);
    updateTasks(updatedTasks);
    console.log(updatedTasks);
  }

  return(
    <div className="container">
      <Heading />
      <div className="newNote">
        <input type="text" value={inputText} onChange={handleChange} onKeyDown={handleKey}></input>
        <button className="addButton" type="submit" onClick={addTasks}>Add</button>
        <div className="task-list">
          {tasks.map((task)=><button className="task" onDoubleClick={deleteTask} value={task}>{task}</button>)}
        </div>    
      </div>
    </div>
  );
}
  
export default List;