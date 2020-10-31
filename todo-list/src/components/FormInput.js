import React, {Component} from 'react';

class FormInput extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className="container">
                    <span className="label-adding">Task List</span>
                    <div className="form">
                        <form id="task-form">
                            <input type="text" placeholder="New Task" className="input"/>
                            <input type="submit" value="Add Task" className="btn" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormInput;