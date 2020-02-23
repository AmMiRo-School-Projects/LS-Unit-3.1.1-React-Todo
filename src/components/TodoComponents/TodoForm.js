import React, { Component } from "react";
import styled from "styled-components";

const FormForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  margin: 0 auto;
`;

class TodoForm extends Component {
  render() {
    return (
      <FormForm onSubmit={this.props.handleSubmit}>
        <input
          required
          type="text"
          name="newTask"
          autoComplete="off"
          value={this.props.state.newTask}
          onChange={this.props.handleChanges}
          placeholder="Add new task"
        />
        <button type="submit">Add Task</button>
      </FormForm>
    );
  }
}

export default TodoForm;
