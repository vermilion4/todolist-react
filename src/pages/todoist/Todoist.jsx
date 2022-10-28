import React from 'react';
import Header from './Header';
import Controls from './Controls';
import ListContainer from './List/ListContainer';
import axios from 'axios';

// Content rendered on /all path
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
  // Add function
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
        <h3 id='edit-mode-text' className={editState ? 'show' : null}>
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
