import React from 'react';
import Header from './Header';
import Controls from './Controls';
import ListContainer from './List/ListContainer';
import { useState } from 'react';
import axios from 'axios';

const Todoist = ({ todo, settodo, isLoading, fetchTodos }) => {
  const [todoText, setTodoText] = useState('');

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
  // const addTodo = () => {
  //   const newTodo = {
  //     _id: crypto.randomUUID(),
  //     title: todoText,
  //     isComplete: false,
  //   };
  //   const updatedTodo = [newTodo, ...todo];
  //   settodo(updatedTodo);
  // };
  return (
    <React.Fragment>
      <div className='wrapper'>
        <h3 id='edit-mode-text'>You are in Edit Mode!</h3>
        <Header
          todoText={todoText}
          setTodoText={setTodoText}
          add={addTodoItem}
        />
        <Controls />
        <ListContainer
          todos={todo}
          fetchTodos={fetchTodos}
          settodos={settodo}
          isLoading={isLoading}
        />
      </div>
      <footer>UI Credit: CodingNepal</footer>
    </React.Fragment>
  );
};

export default Todoist;
