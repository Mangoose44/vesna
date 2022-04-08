import React, { useState } from 'react';
import putin from './img/putin.jpg';
import publ from './img/publ.png';
import mar from './img/mar.png';
import vid from './img/vid.png';
import rosgramm from './img/rosgramm.png';
import './App.css';
import Gallery from './components/Gallery';
import PutinActivities, { PutinOption } from './components/Story';

/*function PutinOption ({ activity }) {
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
}*/

function App () {
  let x = 1;
  let b = "putin";

  const [isPutinAlive, togglePutinAliveness] = useState(true)


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






  

  return (
    <div className="App">
      <div className="header">
        <div className='topLine'>
          <img src={rosgramm} /> 
        <form className='search'>
          <input type="text" placeholder="Поиск"></input>
        </form>
        <button className='singInButton'><b>Войти</b> </button>
        <button className='registrationButton'><b>Зарегистрироваться</b> </button>
        </div>
        <div className='downpartHeader'>
          <div className="left">
            <div className="avatar-container"> 
              <div className="avatar" style={{ background: isPutinAlive ? '#fff' : '#000' }}>
                <img src={putin} />
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
                <PutinActivities />
              </div>
            </div>
            <div className='storyDescription'>
              <PutinOption />
            </div>
            <hr className='line'/>
            <div className='row3'>
              <div>
                <img src={publ} />
              </div>
                <span className='publicationsVideosMarks'> <b>ПУБЛИКАЦИИ</b></span>
              <div>
                <img src={vid} />
              </div>
                <span className='publicationsVideosMarks'> <b>ВИДЕО</b></span>
                <div>
                <img src={mar} />
              </div>
                <span className='publicationsVideosMarks'> <b>ОТМЕТКИ</b></span>
            </div>
            <Gallery />
           </div>  
  );
} 
export default App;