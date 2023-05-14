import React from 'react';
import './Profile.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <div className="stats">
        <div className="stat-card">
          <span className="stat-label">Followers:</span>
          <span className="stat-value">{followers}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Views:</span>
          <span className="stat-value">{views}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Likes:</span>
          <span className="stat-value">{likes}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
