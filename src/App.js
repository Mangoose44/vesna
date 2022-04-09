import React, { useState } from 'react';
import putin from './img/putin.jpg';
import deep from './img/deep.jpeg';
import drink from './img/drink.jpg';
import girls from './img/girls.jpeg';
import mount from './img/mount.jpeg';
import nigger from './img/nigger.jpeg';
import rest from './img/rest.jpeg';
import what from './img/what.jpeg';
import './App.css';
import Gallery from './components/Gallery';
import TopLine from './components/TopLine';
import TabButtons from './components/TabButtons'
import UsernameButton from './components/Username&Button'
import UserDescription from './components/UserDescription';
import {userInfo} from './data/User.js'

import UserInfo from './components/UserInfo';
import UserAvatar from './components/UserAvatar';

function PutinOption ({ activity }) {
  return <span className='storyName1'><b>{activity}</b></span>
}

const putinActivities = [
  deep, drink, girls, mount, nigger, rest, what
]

function PutinActivities ({ activities }) {
  return activities.map((activity, key) => {
    return (
      <div className='story'>
        <img src={activity} alt={key} />
      </div>
    )
  })
}

function App () {
  let x = 1;
  let b = "putin";

  const [isPutinAlive, togglePutinAliveness] = useState(true)

  for (let dick in userInfo) {
    console.log({ dick, value: userInfo[dick] })
  }

  let putinIsAlive = true
  while (!putinIsAlive) {
    console.log('ПУТИН ЖИВ СУКА')
  }

  function renderActivities () {
    return userInfo.activities.map((activity, key) => 
      <PutinOption activity={activity} key={key} />)
  }
  

  return (
    <div className="App">
      <div>
        <TopLine />
        <div className='downpartHeader'>
            <UserAvatar isPutinAlive={isPutinAlive} className="avatar" />
          <div className="right">
            <UsernameButton name={userInfo.name} />
            <UserInfo />
            <UserDescription/>
          </div>
        </div>
      </div>
            <div className='Bottom'>
              <div className='storyraw'>
                {<PutinActivities activities={putinActivities} />}
              </div>
            </div>
            <div className='storyDescription'>
              {renderActivities()}
            </div>
            <hr className='line'/>
            <TabButtons />
            <Gallery />
          </div>
    
  );
} 
export default App;