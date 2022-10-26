import React from 'react'
import './App.css';
import {data} from './links'
import SpecificLink from './Link'

import HeaderBtn from './images/seeMore_icon.png'
import Profile from './images/profilepic.png'
import SlackIcon from './images/slack_icon.png'
import GithubIcon from './images/github_icon.png'
import ZuriInternLogo from './images/zuriInternship_logo.png'
import I4GoodLogo from './images/i4g_logo.png'


function App() {
  return (
    <div className="App">
        <section className='main'>
          <img src={HeaderBtn} alt='share btn' id='shareBtn'/>
          <div>
            <img src={Profile} id='profile__img' alt=''/>
            <h3 id='twitter'>Annette Black</h3>
            <p id='slack' style={{display:"none"}}>@annetteBlack</p>
          </div>
        
          <div className='links'>
            {data.map((link) => {
              return <SpecificLink key={link.id} {...link}></SpecificLink>;
            })} 
          </div>
        </section>

        <section className='icons'>
          <img src={SlackIcon} alt='slack icon'/>
          <img src={GithubIcon} alt='github icon'/>
        </section>

        <section className='footer'>
        <img src={ZuriInternLogo} alt='zuriinternship logo'/>
        <span>HNG Internship 9 Frontend Task</span>
        <img src={I4GoodLogo} alt='i4good logo'/>
        </section>

    </div>
  );
}

export default App;
