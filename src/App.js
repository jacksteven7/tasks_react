import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { tasks } from './tasks.json'
import TodoForm from './components/TodoForm'

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      tasks
    };
    this.addTask = this.addTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }
  
  addTask(task){
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  removeTask(index){
    if(window.confirm('Are you sure you want to delete it?')){
      this.setState({
        tasks: this.state.tasks.filter((e, i) => {
          return i !== index
        })
      })
      console.log(index)
    }
  }

  render(){
    const all_tasks = this.state.tasks.map((task, i) => {
      return(
       <div className="col-md-4" key={i}> 
        <div className="card mt-4">
          <div className="card-header">
            <h3>{task.title}</h3>
            <span className="badge badge-pill badge-danger ml-2">
              {task.priority}
            </span>
          </div>
          <div className="card-body">
            <p>{task.description}</p>
            <p>{task.responsible}</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-danger" onClick={this.removeTask.bind(this, i) }>
            Delete</button>
          </div>
        </div>
      </div>
      )
    })
    

    return (
      <div className="App">
        <nav className = "navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Task Manager
            <span className="badge badge-pill badge-light ml-2">
              { this.state.tasks.length }
            </span>
          </a>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />

        <div className="container">
          <div className="row mt-1">
            <TodoForm onAddTask={this.addTask} />
          </div>
          <div className="row mt-4">
            {all_tasks}
          </div>
        </div>
      </div>
    );
  }  
}

export default App;
