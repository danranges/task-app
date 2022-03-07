import React from 'react';
import Overview from './components/Overview';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        name: '',
      },
      taskList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ task: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
     
    this.setState({ taskList: this.state.taskList.concat(this.state.task), task: { name: '' }});
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.task.name} onChange={this.handleChange}></input>
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={this.state.taskList}></Overview>
      </div>
    );
  }
}

export default App;
