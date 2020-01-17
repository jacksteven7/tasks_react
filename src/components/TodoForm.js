import React,{ Component } from 'react'

class TodoForm extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
    this.handleInput = this.handleInput.bind(this)
    this.saveTask = this.saveTask.bind(this)
  }

  handleInput(e){
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  saveTask(e){
    e.preventDefault();
    this.props.onAddTask(this.state)

  }


  render(){
    return(

      <div className="card">
        <form className="card-body" onSubmit={this.saveTask}>
          <div className="form-group">
            <input type="text" name="title" onChange={this.handleInput} className="form-control" placeholder="Title"/>
          </div>
          <div className="form-group">
            <input type="text" name="responsible" onChange={this.handleInput} className="form-control" placeholder="Responsible"/>
          </div>
          <div className="form-group">
            <input type="text" name="description" onChange={this.handleInput} className="form-control" placeholder="Description"/>
          </div>
          <div className="form-group">
            <select type="text" name="priority" onChange={this.handleInput} className="form-control">
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <div className="form-group">
            <button className="form-control">Save</button>
          </div>
          
        </form>

      </div>

    )
  }
}

export default TodoForm;