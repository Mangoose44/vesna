import React, { useState } from 'react';
import putin from './img/putin.jpg';
import publ from './img/publ.png';
import mar from './img/mar.png';
import vid from './img/vid.png';

import './App.css';
import Gallery from './components/Gallery';
import TopLine from './components/TopLine';
import TabButtons from './components/TabButtons'

import PutinActivities, { PutinOption, putinActivities } from './components/Story';

function App () {
  // study useState react method
  const [isPutinAlive, togglePutinAliveness] = useState(true)
  const [filterActivity, setFilterActivity] = useState(null)

  let userInfo = {
    name: 'Putin',
    age: 70,
    dickSize: 100,
    paranoidDays: [
      1, 7, 12, 14, 31
    ],
    putinSalary: [
      100000000, 5000000, 600000000, 3000000
    ],
    activities: [
      'плаваю',
      'балуюсь',
      'с девченками',
      'на горе',
      'экзотика',
      'чилю',
      'охуели',
      ]
  }

  const filteredActivies = putinActivities.filter(f => f.text.includes(filterActivity))

  return (
    <div className="App">
      <div className="header">
        <TopLine onChange={e => setFilterActivity(e)} />

        <div className='downpartHeader'>
          <div className="left">
            <div className="avatar-container"> 
              <div className="avatar" style={{ background: isPutinAlive ? '#fff' : '#000' }}>
                <img src={putin} alt={'...'} />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="row">
              <span className='leader'><b>{userInfo.name}</b></span>
              <button onClick={() => togglePutinAliveness(!isPutinAlive)} className='suscribeButton'><b>{isPutinAlive ? 'Убить путина' : 'Оживить путина'}</b> </button>
            </div>
                <div className='row2'>
                  <span className='number'><b>100</b> публикаций</span>
                  <span className='number'><b>140000000</b> подписчиков</span>
                  <span className='number'><b>5</b> подписок</span>
                </div>
                <div className='collum'>
                  <div className='collumObject'><b>President of the world</b></div>
                  <div className='collumObject2'><b>Good guy</b></div>
                  <div className='collumObject'>Hunter</div>
                  <div className='collumObject'>Warrior</div>
                  <a href="http://kremlin.ru/">My Homies</a>
                </div>
          </div>
        </div>
      </div>
            <div className='Bottom'>
              <div className='storyraw'>
                <PutinActivities activities={filteredActivies} />
              </div>

            </div>
            <div className='storyDescription'>
              <PutinOption />
            </div>
            <hr className='line'/>
            <TabButtons />
            <Gallery />
           </div>  
  );
} 
export default App;