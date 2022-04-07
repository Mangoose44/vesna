import React from 'react'
import deep from '../img/deep.jpeg';
import drink from '../img/drink.jpg';
import girls from '../img/girls.jpeg';
import mount from '../img/mount.jpeg';
import nigger from '../img/nigger.jpeg';
import rest from '../img/rest.jpeg';
import what from '../img/what.jpeg';



 let putinActivitiesImages = [
  deep, drink, girls, mount, nigger, rest, what
]

export function PutinActivities ({ activities }) {
    return activities.map((activity, key) => {
        return (
        <div className='story'>
            <img src={putinActivitiesImages} alt={key} />
        </div>
        )
    })
    }

export function PutinOption ({ activity }) {
    return <span className='storyName1'><b>{activity}</b></span>
}

let activity = [
      'плаваю',
      'балуюсь',
      'с девченками',
      'на горе',
      'экзотика',
      'чилю',
      'охуели',
      ]