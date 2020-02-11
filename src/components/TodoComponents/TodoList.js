import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const Listdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 2%;
  width: 100%;
`;

const ListContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const ListButton = styled.button`
  width: 20%;
  padding: 2%;
  border: 1px solid black;
  border-radius: 3px;
  cursor: pointer;
`;

const TodoList = props => {
  return (
    <ListContainerDiv>
      <Listdiv>
        {props.state.tasks.map(task => (
          <Todo key={task.id} task={task} toggleTask={props.toggleTask} />
        ))}
      </Listdiv>
      <ListButton onClick={props.clearCompleted}>
        Clear Completed Tasks
      </ListButton>
    </ListContainerDiv>
  );
};

export default TodoList;
