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
  isInputDisabled,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      add();
    }
  };

  return (
    <div className='head-section'>
      <div className='task-input'>
        <p className={editState || 'show'}>Press Enter to add a new todo</p>
        <Board className='img' />
        <input
          id='todo-input'
          onChange={(e) => setTodoText(e.target.value)}
          type='text'
          value={todoText}
          onKeyDown={handleKeyDown}
          placeholder='Add a new task'
          disabled={isInputDisabled}
        />
      </div>
      <div id='edit-btns'>
        <Button
          text='Update'
          onclick={() => updateTodo(todoUpdateId, todoText, completeState)}
          classname={`btn update-btn ${editState && 'show'}`}
        />
        <Button
          text='Cancel'
          onclick={() => {
            setEditState(false);
            setTodoText('');
          }}
          classname={`btn cancel-btn ${editState && 'show'}`}
        />
      </div>
    </div>
  );
};

export default Header;
