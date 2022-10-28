// const addTodo = () => {
//   const newTodo = {
//     _id: crypto.randomUUID(),
//     title: todoText,
//     isComplete: false,
//   };
//   const updatedTodo = [newTodo, ...todo];
//   settodo(updatedTodo);
// };
import React from 'react';
import Header from './Header';
import Controls from './Controls';
import ListContainer from './List/ListContainer';
import { useState } from 'react';
import axios from 'axios';

const Todoist = ({
  todo,
  settodo,
  isLoading,
  fetchTodos,
  editTodo,
  todoText,
  editState,
  updateTodo,
  todoUpdateId,
  completeState,
  setTodoText,
  setEditState,
}) => {
  const addTodoItem = async () => {
    await axios
      .post('/add', `title=${todoText}`)
      .then((response) => {
        console.log(response);
        setTodoText('');
        fetchTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <div className='wrapper'>
        <h3 id='edit-mode-text' className={editState && 'show'}>
          You are in Edit Mode!
        </h3>
        <Header
          todoText={todoText}
          setTodoText={setTodoText}
          editState={editState}
          updateTodo={updateTodo}
          todoUpdateId={todoUpdateId}
          completeState={completeState}
          setEditState={setEditState}
          add={addTodoItem}
        />
        <Controls />
        <ListContainer
          todos={todo}
          fetchTodos={fetchTodos}
          edit={editTodo}
          settodos={settodo}
          todoUpdateId={todoUpdateId}
          updateTodo={updateTodo}
          isLoading={isLoading}
        />
      </div>
      <footer>UI Credit: CodingNepal</footer>
    </React.Fragment>
  );
};

export default Todoist;
