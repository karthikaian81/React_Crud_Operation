import React, { useEffect } from "react";
import "./TodoListSection.css";

export default function TodoListSection({objliTag,TodoCheckChange,DeleteTodo,SelectAllchk})
{
    console.log('TodoLIST')
    console.log(objliTag)
    useEffect(() => {
     let AppCont =   document.querySelector('.App');
     let lstTagcnt = document.querySelector('#lstTagcnt');
     let ConditionHeight = AppCont.scrollHeight - 200;
     if(lstTagcnt.scrollHeight > ConditionHeight)
        lstTagcnt.style.height = (AppCont.scrollHeight - 200)+'px';
     else
     lstTagcnt.style.height = 'auto'

    })

    return(
        <>
       <div id="lstTagPageCnt">
        { objliTag && Array.isArray(objliTag) && objliTag.length > 0 ?
            <div id="lstTagcnt" className="lstTagcnt_cls">
                <div> 
                    <input type="checkbox" id="chkAll" onChange={SelectAllchk} />
                </div>
                <div><label>Todo Name</label></div>
                <div><label>Action</label></div>
                { objliTag.map((x) =>{
                        return <>
                            <div id={'Item'+x.id} key={x.id}> 
                                <input type='checkbox' id={'chk'+x.id} checked={x.selected} onChange={() => TodoCheckChange(x.id)} />
                            </div>
                            <div>
                                <label>{x.itemName}</label>  
                            </div>
                            <div>
                                <input type='button' id="btnDell" value={'Delete'} onClick={() => DeleteTodo(x.id)} />
                            </div>
                        </>
                    })
                } 
              
            </div>
            : <article>Your list is empty</article>
        }
  
    </div>
    
    </>

    )
}