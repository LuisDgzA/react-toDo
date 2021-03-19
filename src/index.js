import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';
import toDoService from './components/ServiceLocalStorage';


import './index.css';



class ToDoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {            
            toDos: [],    
        }
    }

    componentDidMount() {
            
        
        /** obtener las to-Dos del localstorage */
        let toDos = toDoService.getData();
        /** si no existe algún item "TODO" en localstorage entonces el array es vacío */
        if(!toDos){
            return;
        }
        this.setState({toDos});
    }
    /** llamar la función addToDo al presionar la tecla enter en el input */
    submitToDo = (e) => {
        if(e.keyCode === 13){
            if(e.target.value.trim() === ''){
                return;
            }else{
                this.addToDo(e.target.value)
                //e.target.value = '';
            }
        }
        
    }
    /** recibe el nombre de un ToDo, lo agrega al estado y lo guarda en el localstorage */
    addToDo = (name) => {
        const newToDo = {
            name: name,
            id: (this.state.toDos.length),
            done: false, 
            delete: false,
        }
        const allToDos = [...this.state.toDos, newToDo];
        toDoService.setData(JSON.stringify(allToDos));
       
        
        this.setState({
            toDos: allToDos,
        })    
        
        
    }
    /** recibe el id de un ToDo, invierte la propiedad done y lo guarda en localstorage*/
    completeToDo = (id) =>{
        //alert(id)
        const currentToDos = this.state.toDos;
        currentToDos[id].done = !currentToDos[id].done;
        
        toDoService.setData(JSON.stringify(currentToDos));
        
        
        this.setState({toDos: currentToDos});
        
    }
    /** recibe el id de un ToDo, invierte la propiedad delete y lo guarda en localstorage*/
    deleteToDo = (id) => {
        const currentToDos = this.state.toDos;
        currentToDos[id].delete = !currentToDos[id].delete;
        toDoService.setData(JSON.stringify(currentToDos));       
        this.setState({toDos: currentToDos});
        
    }

    
    render(){
        console.log("render App");
        return (
            <div className="container">
                <Header />
                <ToDoList todos={this.state.toDos} completeToDo={this.completeToDo} deleteToDo={(i) => this.deleteToDo(i)}/>
                <AddToDo submitToDo={this.submitToDo}/>
            </div>
        );
    }
}




ReactDOM.render(
    <ToDoApp/>,
    document.getElementById('root')
);