import { Button } from './Button';

const Controls = () => {
  return (
    <div className='controls'>
      <div className='filters'>
        <span className='active' id='all'>
          All
        </span>
        <span id='pending'>Pending</span>
        <span id='completed'>Completed</span>
      </div>
      <Button text='Clear All' clearBtn />
    </div>
  );
};

export default Controls;
