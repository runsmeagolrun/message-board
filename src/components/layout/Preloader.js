import React from "react";

// preloader to show during async task
const Preloader = () => {
  return (
    <div className='progress blue lighten-4'>
      <div className='indeterminate blue'></div>
    </div>
  );
};

export default Preloader;
