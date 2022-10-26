import React from 'react'
import './App.css';
import {data} from './links'
import SpecificLink from './Link'

function App() {
  return (
    <div className="App">
        <section className='header'>

        </section>
        <section className='links'>
          {data.map((link) => {
            return <SpecificLink key={link.id} {...link}></SpecificLink>;
          })} 
        </section>
        <section className='icons'>
          
        </section>
        <section className='footer'>
          
        </section>
    </div>
  );
}

export default App;
