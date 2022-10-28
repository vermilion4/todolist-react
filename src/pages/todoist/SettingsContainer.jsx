import Ellipsis from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import Edit from '@iconscout/react-unicons/icons/uil-pen';
import Delete from '@iconscout/react-unicons/icons/uil-trash';
import { useState } from 'react';

const Settings = ({ component, text, func, id }) => {
  return (
    <li onClick={() => func(id)}>
      {component}
      {text}
    </li>
  );
};

const SettingsContainer = ({ deleteTodo, id, edit }) => {
  const [show, setShow] = useState(false);
  return (
    <div className='settings'>
      <Ellipsis id='ellipsis' onClick={() => setShow(!show)} />
      <ul className={`task-menu ${show ? 'show' : ''}`}>
        <Settings id={id} func={edit} component={<Edit />} text='Edit' />
        <Settings
          func={deleteTodo}
          id={id}
          component={<Delete />}
          text='Delete'
        />
      </ul>
    </div>
  );
};

export default SettingsContainer;
