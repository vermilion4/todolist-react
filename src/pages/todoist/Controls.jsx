import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';

const Controls = () => {
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
      <Button text='Clear All' clearBtn />
    </div>
  );
};

export default Controls;
