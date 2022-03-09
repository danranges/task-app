import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Overview from './components/Overview';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        name: '',
        uuid: uuidv4(),
        editing: false,
      },
      taskList: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        name: e.target.value,
        uuid: this.state.task.uuid,
        editing: false,
      },
    });
  };

  handleDelete = (uuid) => {
    this.setState({ taskList: this.state.taskList.filter((task) => task.uuid !== uuid) });
  };

  handleEditingState = (uuid) => {
    const tasks = [...this.state.taskList];
    const task = tasks.find((task) => task.uuid === uuid);
    task.editing = !task.editing;
    this.setState({ taskList: tasks });
  };

  handleEdit = (e, uuid) => {
    const tasks = [...this.state.taskList];
    const task = tasks.find((task) => task.uuid === uuid);
    task.name = e.target.value;
    this.setState({ taskList: tasks });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      taskList: this.state.taskList.concat(this.state.task),
      task: { name: '', uuid: uuidv4(), editing: false },
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.task.name} onChange={this.handleChange}></input>
          <button type="submit">Add Task</button>
        </form>
        <Overview
          tasks={this.state.taskList}
          deleteTask={this.handleDelete}
          editTask={this.handleEditingState}
          commitEdit={this.handleEdit}></Overview>
      </div>
    );
  }
}

export default App;
