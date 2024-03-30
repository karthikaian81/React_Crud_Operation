import logo from './logo.svg';
import './App.css';
import Test from './Test';
import TodoMain from './TodoMain';
import { useState,useEffect } from 'react';


export default function App() {

  const HardCodedTodoList = [
    {id: 1,itemName:'Play',selected:true}
    ,{id: 2,itemName:'Learn',selected:false}
    ,{id: 3,itemName:'Practice',selected:false}
];
    const [objliTag,setobjliTag] = useState(checklocalstorage)

    function checklocalstorage(){
        let storeddata = localStorage.getItem("StoredTodoList");
        if(storeddata){
            storeddata = JSON.parse(storeddata);
            if(Array.isArray(storeddata) && storeddata.length){
                return storeddata
            }
        }
      return  HardCodedTodoList;
    }


    function SetLocalstorage(Data){
        localStorage.setItem("StoredTodoList",JSON.stringify(Data))
    }

    function GetLocalstorage(){
       setobjliTag(JSON.parse(localStorage.getItem("StoredTodoList")));
    }

    function AddTodo(){
        let txtTodo =  document.getElementById('txtTodo');
        let txtTodoVal = txtTodo.value;
        let new_Data = [...objliTag,{id: objliTag.length+1,itemName:txtTodoVal,selected:false}];
        setobjliTag(new_Data)
        SetLocalstorage(new_Data);
        txtTodo.value = null;
    }

    function ClearTodoLocalStorage(){
      localStorage.setItem("StoredTodoList",null)

    }

    function DeleteTodo(Id){
      var chkbox = document.getElementById('chk'+Id);
      if(chkbox.checked){
        let DelIndex = objliTag.findIndex(x=> x.id == Id);
        //console.log(objliTag);
        var objliTagCopy =[...objliTag];
        objliTagCopy.splice(DelIndex,1)
        //console.log(objliTagCopy);
        setobjliTag(objliTagCopy);
        SetLocalstorage(objliTagCopy)
      }
      else
       alert('Check the checkbox and press the delete button')
       ;
    }

    function TodoCheckChange(Id){
      let ChkTagIndex =objliTag.findIndex(x=> x.id == Id);
      objliTag[ChkTagIndex].selected = !objliTag[ChkTagIndex].selected;
      setobjliTag([...objliTag]);
    }

    function AddTodoDatainEnterKey(e){
        console.log(e);
        if(e.keyCode==13)
        {
          document.querySelector('#btnTodo').click();//AddTodo();
        }
    }

    function SelectAllchk(){
     let chkall = document.querySelector('#chkAll');
     setobjliTag(
     objliTag.map((x) => {
        x.selected = chkall.checked;
        return x;
     })
     )
    }

   
  
  return (   
    <section className="App">
       <main>
        <TodoMain AddTodo={AddTodo} objliTag ={objliTag} 
        objliTaglength = {objliTag.length} DeleteTodo = {DeleteTodo} 
        TodoCheckChange = {TodoCheckChange} 
        AddTodoDatainEnterKey = {AddTodoDatainEnterKey} SelectAllchk={SelectAllchk} 
        ClearTodoLocalStorage = {ClearTodoLocalStorage}
        />
       </main>
    </section>
  );
}

