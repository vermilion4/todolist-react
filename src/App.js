import './App.css';
import Todoist from './pages/todoist/Todoist';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App ()
{
  const [todo, setTodo] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

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


  return (
    <>
      <Todoist todo={ todo } isLoading={ isLoading } fetchTodos={ fetchTodos } settodo={ setTodo } />
    </>
  );
}

export default App;