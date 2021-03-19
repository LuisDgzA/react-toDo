import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

class AddToDo extends React.Component{
    
    render(){
        console.log("render AddToDo");

        return(
            <div className="add-to-do">
                <FontAwesomeIcon className="btnAddToDo" icon={faPlusSquare} />
                <input autoFocus type="text" id="input" onKeyUp={this.props.submitToDo} placeholder="Agregar"/>
            </div>
        )
    }
}

export default AddToDo;