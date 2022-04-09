import React from 'react';
import putin from '../img/putin.jpg';

 
export function UserAvatar ({ isPutinAlive }) {
    return (
        <div className="left">
            <div className="avatar-container"> 
              <div className="avatar">
                <img src={putin} alt=".." />
              </div>
            </div>
          </div>
    )
}

export default UserAvatar