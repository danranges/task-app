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
        id: '',
      },
      taskList: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        name: e.target.value,
        uuid: uuidv4(),
      },
    });
  };

  handleDelete = (uuid) => {
    this.setState({ taskList: this.state.taskList.filter((task) => task.uuid !== uuid) });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ taskList: this.state.taskList.concat(this.state.task), task: { name: '' } });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.task.name} onChange={this.handleChange}></input>
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={this.state.taskList} deleteTask={this.handleDelete}></Overview>
      </div>
    );
  }
}

export default App;
