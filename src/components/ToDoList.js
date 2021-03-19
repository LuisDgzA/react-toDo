import React from 'react';
import ToDoItem from './ToDoItem';


class ToDoList extends React.Component{
    
    render(){
        const {todos, completeToDo, deleteToDo} = this.props;
        console.log("render ToDoList");
        // const arrayLiToDos = [];
        const toDoItems = todos.filter(toDo => !toDo.delete).map(todo => (
            <ToDoItem todo={todo} key={todo.id} completeToDo={() => completeToDo(todo.id)} deleteToDo={() => deleteToDo(todo.id)} />

        ))
        // todos.forEach((todo) =>{
        //     if(!todo.delete){
        //         arrayLiToDos.push(
        //             <ToDoItem todo={todo} key={todo.id} completeToDo={() => completeToDo(todo.id)} deleteToDo={() => deleteToDo(todo.id)} />
        //         );
        //     }
            
        // })
        
        return(
            <div className="content">
                <ul id="list">
                    {toDoItems}
                </ul>
            </div>
        )
        
    }
}

export default ToDoList;