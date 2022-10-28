import React from 'react';
import Header from './Header';
import Controls from './Controls';
import ListContainer from './List/ListContainer';

const Pending = ({
  todo,
  isLoading,
  updateTodo,
  fetchTodos,
  editTodo,
  settodo,
  todoText,
  setTodoText,
  editState,
  todoUpdateId,
  completeState,
  setEditState,
}) => {
  const pendingTodo = todo.filter((item) => item.isComplete === false);

  return (
    <React.Fragment>
      <div className='wrapper'>
        <h3 id='edit-mode-text'>You are in Edit Mode!</h3>
        <Header
          todoText={todoText}
          setTodoText={setTodoText}
          editState={editState}
          updateTodo={updateTodo}
          todoUpdateId={todoUpdateId}
          completeState={completeState}
          setEditState={setEditState}
        />
        <Controls />
        <ListContainer
          todos={pendingTodo}
          isLoading={isLoading}
          updateTodo={updateTodo}
          fetchTodos={fetchTodos}
          edit={editTodo}
          settodos={settodo}
        />
      </div>
      <footer>UI Credit: CodingNepal</footer>
    </React.Fragment>
  );
};

export default Pending;
