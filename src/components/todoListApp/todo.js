import React from 'react'
import {useState} from 'react'
export const Todo = ({item,onUpdate,onDelete}) => { 
    const[isEdit,setIsEdit]=useState(false);
    const[newValue,setNewValue]=useState(item.title);

    function handleIsEdit(event) {
        setIsEdit(true);
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    function handleChange(e){
        setNewValue(e.target.value);
    }
    function handleClick(event){
      event.preventDefault();
      onUpdate(item.id,newValue);
      setIsEdit(false);
    }
     function TodoElement(){
         return (
            <div className="todoInfo">
                <span className="todoTitle">{item.title}</span>
                <button className="button" onClick={handleIsEdit}>Editar</button>
                <button className="buttonDelete" onClick={()=>onDelete(item.id)}>Eliminar</button>
            </div>
         )
     }
  return (
    <div className="todo">
        {isEdit ? ( 
        <form className="todoUpdateForm" onSubmit={handleSubmit}>
             <input className="todoInput" onChange={handleChange} value={newValue} type="text" />
             <input className="buttonUpdate" onClick={handleClick} value="Update" type="submit"></input>
         </form>
         ):(
         <TodoElement/>
         )
       }
    </div>
  )
}
