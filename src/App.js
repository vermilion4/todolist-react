import './App.css';
import Todoist from './pages/todoist/Todoist';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Pending from './pages/todoist/Pending';
import Completed from './pages/todoist/Completed';

function App ()
{
  const [todo, setTodo] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const [todoText, setTodoText] = useState('');
  const [editState, setEditState] = useState(false);
  let [todoUpdateId, setTodoUpdateId] = useState('');
  let [completeState, setCompleteState] = useState(false);

  const fetchTodos = async () =>
  {
    const response = await axios.get("/todos");
    let { data } = response;

    setTodo(data.data);
    setIsLoading(false);
  };

  useEffect(() =>
  {
    //Invoke fetch
    fetchTodos();

  }, []);

  const editTodo = (todoid) =>
  {
    const todoToUpdate = todo.find((item) => item.id === todoid);
    const { id, title, isComplete } = todoToUpdate;
    setTodoUpdateId(id);
    setTodoText(title);
    setCompleteState(isComplete);
    setEditState(true);
  };

  const updateTodo = async (id, titleText, complete) =>
  {
    await axios.post(
      '/edit',
      `id=${ id }&title=${ titleText }&isComplete=${ complete }`
    ).then(async () =>
    {
      await fetchTodos();
    })
      .then(() =>
      {
        setEditState(false);
        setTodoText('');
      });

    // const updatedTodo = { id, titleText, complete };
    // await axios.post(
    //   '/edit',
    //   updatedTodo,
    //   {
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   }
    // );
    // fetchTodos();
    // setEditState(false);
    // setTodoText('');
  };


  return (
    <Router>
      <Routes>
        <Route path='/' element={ <div className='Todoist-container'><Link to={ '/all' } className='Todolist'>Go to Todolist</Link></div> }></Route>
        <Route path='/all' element={ <Todoist editTodo={ editTodo } updateTodo={ updateTodo } todoText={ todoText } completeState={ completeState } setTodoText={ setTodoText } todoUpdateId={ todoUpdateId } editState={ editState } todo={ todo } isLoading={ isLoading } fetchTodos={ fetchTodos } settodo={ setTodo } setEditState={ setEditState } /> }></Route>
        <Route path='/pending' element={ <Pending todo={ todo } isLoading={ isLoading } editTodo={ editTodo } updateTodo={ updateTodo } todoText={ todoText } completeState={ completeState } setTodoText={ setTodoText } todoUpdateId={ todoUpdateId } editState={ editState } fetchTodos={ fetchTodos } settodo={ setTodo } setEditState={ setEditState } /> }></Route>
        <Route path='/completed' element={ <Completed todo={ todo } isLoading={ isLoading } editTodo={ editTodo } updateTodo={ updateTodo } todoText={ todoText } completeState={ completeState } setTodoText={ setTodoText } todoUpdateId={ todoUpdateId } editState={ editState } fetchTodos={ fetchTodos } settodo={ setTodo } setEditState={ setEditState } /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;