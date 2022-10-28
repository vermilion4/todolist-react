import React from 'react';
import { Hearts } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Hearts
      height='80'
      width='80'
      color='rgb(162, 64, 64)'
      ariaLabel='hearts-loading'
      wrapperStyle={{}}
      wrapperClass='loader'
      visible={true}
    />
  );
};

export default Loader;
