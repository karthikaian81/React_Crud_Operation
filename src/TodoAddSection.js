import React from "react";

export default function TodoAddSection({AddTodo,AddTodoDatainEnterKey,ClearTodoLocalStorage}){
    return (
    <>
        <label>Todo Name</label>
        <input type='text' placeholder='Enter a Todo' id='txtTodo' minLength = {5} maxLength={20} onKeyDown={AddTodoDatainEnterKey} />
        <input type='button' id='btnTodo' value={'Add Todo'} onClick={AddTodo}  />
        <input type='submit' id='btnClearData' value={'Clear Data'} onClick={ClearTodoLocalStorage}  />
    </>
    )
}