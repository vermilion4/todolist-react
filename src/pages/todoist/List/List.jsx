import SettingsContainer from '../SettingsContainer';
// import Todoist from '../Todoist';
import { useState } from 'react';
import axios from 'axios';

export const List = (props) => {
  const { todo, fetchTodos } = props;

  let { id, title, isComplete } = todo;
  const [click, setClick] = useState(isComplete);
  function handleClick() {
    setClick(!click);
  }
  isComplete = click;

  //delete axios
  const deleteTodoItem = async (id) => {
    axios
      .post(`/delete/${id}`)
      .then((response) => {
        console.log(response);
        fetchTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Delete Todo
  // const deleteTodo = (todoId) => {
  //   const updatedTodo = todos.filter(({ id }) => id !== todoId);
  //   settodos(updatedTodo);
  // };

  return (
    <li className='task'>
      <label htmlFor={id}>
        <input
          onChange={handleClick}
          type='checkbox'
          id={id}
          checked={isComplete}
        />
        <p className={isComplete ? 'checked' : ''}>{title}</p>
      </label>
      <SettingsContainer id={id} deleteTodo={deleteTodoItem} />
    </li>
  );
};
