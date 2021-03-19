import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class ToDoItem extends React.Component{
    
    render(){
        console.log("render ToDoItem");
        return(
        
            <li className="item">
                <button className="button-non-style complete" id="btnAddToDo" onClick={this.props.completeToDo}><FontAwesomeIcon  icon={this.props.todo.done ? faCheckCircle : faCircle}/></button>                
                <p className={"text" + (this.props.todo.done ? " line-through" : "")}>{this.props.todo.name}</p>
                <button className="button-non-style delete" id="btnAddToDo" onClick={this.props.deleteToDo}><FontAwesomeIcon icon={faTrashAlt} /></button>
                
            </li>
        )
        
        
    }
}

export default ToDoItem;