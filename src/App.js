import React from 'react'
import './App.css';
import {data} from './links'
import SpecificLink from './Link'

import HeaderBtn from './images/share_icon.png'
import Profile from './images/profilepic.png'
import SlackIcon from './images/slack_icon.png'
import GithubIcon from './images/github_icon.png'
import ZuriInternLogo from './images/zuriinternship_logo.png'
import I4GoodLogo from './images/i4g_logo.png'

function App() {
  return (
    <div className="App">
        <section className='header'>
          <img src={HeaderBtn} alt='share btn'/>
          <div>
            <img src={Profile} id='profile__img' alt='profile image'/>
            <h3 id='twitter'>Annette Black</h3>
            <p id='slack'>@annetteBlack</p>
          </div>
        </section>
        <section className='links'>
          {data.map((link) => {
            return <SpecificLink key={link.id} {...link}></SpecificLink>;
          })} 
        </section>
        <section className='icons'>
          <img src={SlackIcon} alt='slack btn'/>
          <img src={GithubIcon} alt='github btn'/>
        </section>
        <section className='footer'>
        <img src={HeaderBtn} alt='share btn'/>
        <span></span>
        <img src={HeaderBtn} alt='share btn'/>
        </section>
    </div>
  );
}

export default App;
