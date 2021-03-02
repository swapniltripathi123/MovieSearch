import React from 'react';
import './App.css';
import Searchmovie from './components/Searchmovie';

const App=()=> {
  return (
    <div className='container'>
      <h1 className='title' id='startShow'>Movie Search </h1>
      
<Searchmovie/>
    </div>
  )
}

export default App;
   