import React from 'react';
import { useState } from 'react';
import './TodoMain.css';
import TodoAddSection from './TodoAddSection';
import TodoListSection from './TodoListSection';
import TotalCountSection from './TotalCountSection';

export default function(props){
    console.log('TodoMain')
    console.log(props.objliTag)

    return (
        <>
        <div className='AddTodoSec'>
        <TodoAddSection AddTodoDatainEnterKey = {props.AddTodoDatainEnterKey} AddTodo={props.AddTodo} ClearTodoLocalStorage={props.ClearTodoLocalStorage}/>
        </div>
      
          <div className='TodoSeclist'>
          <TodoListSection  objliTag={props.objliTag} DeleteTodo = {props.DeleteTodo} TodoCheckChange = {props.TodoCheckChange} SelectAllchk={props.SelectAllchk}/>
          </div>

          <div className='AddTodoSummarySection'>
            <TotalCountSection objliTaglength = {props.objliTaglength}/>
          </div>
        </>
    )
}