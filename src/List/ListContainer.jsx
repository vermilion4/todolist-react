import { List } from './List';
import Loader from '../Loaders/Loader';

const ListContainer = ({
  todos,
  settodos,
  edit,
  isLoading,
  fetchTodos,
  updateTodo,
  isInputDisabled,
  setIsInputDisabled,
}) => {
  // console.log(todos);

  return (
    <ul className='task-box'>
      {isLoading && <Loader />}
      {isLoading === false && todos.length < 1 && (
        <p style={{ textAlign: 'center' }}>You don't have any task here</p>
      )}
      {isLoading === false &&
        todos.length > 0 &&
        todos.map((todo) => {
          return (
            <List
              todo={todo}
              edit={edit}
              todos={todos}
              key={todo.id}
              fetchTodos={fetchTodos}
              settodos={settodos}
              updateTodo={updateTodo}
              isInputDisabled={isInputDisabled}
              setIsInputDisabled={setIsInputDisabled}
            />
          );
        })}
    </ul>
  );
};

export default ListContainer;
