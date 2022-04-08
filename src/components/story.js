import React from 'react'
import deep from '../img/deep.jpeg';
import drink from '../img/drink.jpg';
import girls from '../img/girls.jpeg';
import mount from '../img/mount.jpeg';
import nigger from '../img/nigger.jpeg';
import rest from '../img/rest.jpeg';
import what from '../img/what.jpeg';

  let activitiesInfo = {
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

export function PutinOption ({ activity }) {
  return <span className='storyName1'><b>{activitiesInfo.activity}</b></span>
}

const putinActivities = [
  deep, drink, girls, mount, nigger, rest, what
]

export function PutinActivities ({ activities }) {
  return activities.map((activity, key) => {
    return (
      <div className='story'>
        <img src={putinActivities} alt={key} />
      </div>
    )
  })
}

export function RenderActivities () {
    return activitiesInfo.activities.map((activity, key) => 
        <PutinOption activity={activity} key={key} />)
}

{<PutinActivities activities={putinActivities} />}

export default PutinActivities 