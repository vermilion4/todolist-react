import SettingsContainer from '../Components/SettingsContainer';
import { useState } from 'react';
import axios from 'axios';

export const List = (props) => {
  const {
    todo,
    fetchTodos,
    edit,
    updateTodo,
    isInputDisabled,
    setIsInputDisabled,
  } = props;

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

  return (
    <li className='task'>
      <label htmlFor={id}>
        <input
          onChange={async () => {
            setIsInputDisabled(true);
            await updateTodo(id, title, !isTodoCompleted).then(() =>
              setIsTodoCompleted(!isTodoCompleted)
            );

            fetchTodos();
            setIsInputDisabled(false);
          }}
          type='checkbox'
          id={id}
          checked={isTodoCompleted}
          disabled={isInputDisabled}
        />
        <p className={isTodoCompleted ? 'checked' : ''}>{title}</p>
      </label>
      <SettingsContainer id={id} edit={edit} deleteTodo={deleteTodoItem} />
    </li>
  );
};
