import Board from '@iconscout/react-unicons/icons/uil-clipboard-notes';
import { Button } from './Button';

const Header = ({
  todoText,
  todoUpdateId,
  completeState,
  setTodoText,
  updateTodo,
  add,
  editState,
  setEditState,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      add();
    }
  };

  return (
    <div className='head-section'>
      <div className='task-input'>
        <Board className='img' />
        <input
          id='todo-input'
          onChange={(e) => setTodoText(e.target.value)}
          type='text'
          value={todoText}
          onKeyDown={handleKeyDown}
          placeholder='Add a new task'
        />
      </div>
      <div id='edit-btns'>
        <Button
          text='Update'
          onclick={() => updateTodo(todoUpdateId, todoText, completeState)}
          editState={editState}
          updateBtn
        />
        <Button
          text='Cancel'
          editState={editState}
          onclick={() => {
            setEditState(false);
            setTodoText('');
          }}
          cancelBtn
        />
      </div>
    </div>
  );
};

export default Header;
