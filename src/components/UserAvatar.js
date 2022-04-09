import React from 'react';
import putin from '../img/putin.jpg';

 
export function UserAvatar ({ isPutinAlive }) {
    return (
        <div className="left">
            <div className="avatar-container"> 
              <div className="avatar" style={{ background: isPutinAlive ? '#fff' : '#000' }}>
                <img src={putin} alt=".." />
              </div>
            </div>
          </div>
    )
}

export default UserAvatar