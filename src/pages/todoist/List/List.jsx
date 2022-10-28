import SettingsContainer from '../SettingsContainer';
// import Todoist from '../Todoist';
import { useState } from 'react';
import axios from 'axios';

export const List = (props) => {
  const { todo, fetchTodos, edit, updateTodo } = props;

  let { id, title, isComplete } = todo;
  let [isTodoCompleted, setIsTodoCompleted] = useState(isComplete);

  //delete axios
  const deleteTodoItem = async (id) => {
    axios
      .delete(`/delete/${id}`)
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
          onChange={async () => {
            await updateTodo(id, title, !isTodoCompleted).then(() =>
              setIsTodoCompleted(!isTodoCompleted)
            );

            fetchTodos();
          }}
          type='checkbox'
          id={id}
          checked={isTodoCompleted}
        />
        <p className={isTodoCompleted ? 'checked' : ''}>{title}</p>
      </label>
      <SettingsContainer id={id} edit={edit} deleteTodo={deleteTodoItem} />
    </li>
  );
};
