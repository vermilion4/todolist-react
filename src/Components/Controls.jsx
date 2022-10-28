import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';

const Controls = ({ clearBtnState, fetchTodos, setIsLoading }) => {
  const clearAllTodos = async () => {
    setIsLoading(true);
    await axios
      .post('/clear')
      .then(async () => {
        await fetchTodos();
      })
      .then(() => setIsLoading(false));
  };
  return (
    <div className='controls'>
      <div className='filters'>
        <NavLink to={'/all'} className='span' id='all'>
          All
        </NavLink>
        <NavLink to={'/pending'} className='span' id='pending'>
          Pending
        </NavLink>
        <NavLink to={'/completed'} id='completed' className='span'>
          Completed
        </NavLink>
      </div>
      <Button
        classname={`btn clear-btn ${clearBtnState ? 'active' : ''}`}
        text='Clear All'
        onclick={() => clearAllTodos()}
        clearBtn
      />
    </div>
  );
};

export default Controls;
