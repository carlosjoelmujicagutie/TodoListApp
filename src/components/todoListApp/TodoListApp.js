import React from 'react'
import { useState } from 'react'
import {Todo} from './todo'
import './../css/todoApp.css'
export const TodoListApp = () => {

  const[title,setTitle] =useState("");
  const[titles,setTitles]=useState([]);

  function handleChange(event){
    const value = event.target.value
    setTitle(value);
  }
  function handleSubmit(event){
    event.preventDefault();
    const newTdos={
      id: crypto.randomUUID(),
      title: title,
      comple:false,
    };
    const temp =[...titles];
    temp.unshift(newTdos);
    setTitles(temp);
    setTitle('');
  }
  function handleUpdate(id,value) {
    const temp =[...titles];
    const item= temp.find(item=>item.id===id);
    item.title=value;
    setTitles(temp);
  }
  function handleDelete(id){
    const temp =titles.filter(item=>item.id!==id);
    setTitles(temp);
  }
  return (
    <div className="todoContainer">
        <form className="todoCreateApp" onSubmit={handleSubmit}>
             <input className="todoInput" onChange={handleChange} value={title} type="text" />
             <input className="buttonCreate" onClick={handleSubmit} value="Create" type="submit"></input>
        </form>
        <div className="todosContainer">
          {
              titles.map(item => (
                <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
              ))
          }
        </div>
    </div>
  )
}
