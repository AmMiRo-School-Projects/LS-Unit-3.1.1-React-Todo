import React from "react";
import TodoLiist from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";
import styled from "styled-components";

const AppH1 = styled.h1`
  font-size: 4rem;
  margin: 2%;
  text-align: center;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      newTask: "",
      query: ""
    };
  }

  addNewTask = newTask => {
    let newestTask = {
      name: newTask,
      id: Date.now(),
      completed: false
    };
    this.setState({ tasks: [...this.state.tasks, newestTask] });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.completed === false)
    });
  };

  handleChanges = e => {
    this.setState({
      newTask: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addNewTask(this.state.newTask);
    this.setState({ newTask: "" });
  };

  toggleTask = clickedId => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === clickedId) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });

    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div>
        <AppH1>Task App!</AppH1>
        <TodoForm
          handleChanges={this.handleChanges}
          handleSubmit={this.handleSubmit}
          state={this.state}
        />
        <TodoLiist
          state={this.state}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
