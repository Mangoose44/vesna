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

export const putinActivities = [
 {
     image: deep,
     text: 'плаваю'
 },
 {
     image: drink,
     text: 'балуюсь'
 },
 {
     image: girls,
     text: 'с девченками'
 },
 {
     image: mount,
     text: 'на горе'
 },
 {
     image: nigger,
     text: 'экзотика'
 },
 {
     image: rest,
     text: 'чилю'
 },
 {
     image: what,
     text: 'охуели'
 },
]

console.log({ putinActivities })

export function PutinActivities ({ activities }) {
  return activities.map((activity, key) => {
    return (
      <div className='story' key={key}>
        <img src={activity.image} alt={activity.text} />
        <p>{activity.text}</p>
      </div>
    )
  })
}

export function RenderActivities () {
    return activitiesInfo.activities.map((activity, key) => 
        <PutinOption activity={activity} key={key} />)
}

export default PutinActivities 