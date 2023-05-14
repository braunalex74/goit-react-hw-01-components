import React from 'react';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div
      style={{
        width: '400px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src={avatar}
          alt="User avatar"
          style={{ width: '100%', height: '100%', borderRadius: '50%' }}
        />
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{username}</p>
        <p style={{ color: '#666', marginTop: '5px' }}>@{tag}</p>
        <p style={{ color: '#999', marginTop: '5px' }}>{location}</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            flex: '1',
            padding: '10px',
            margin: '0 5px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Followers:</span>
          <br />
          <span style={{ fontSize: '16px' }}>{followers}</span>
        </div>
        <div
          style={{
            flex: '1',
            padding: '10px',
            margin: '0 5px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Views:</span>
          <br />
          <span style={{ fontSize: '16px' }}>{views}</span>
        </div>
        <div
          style={{
            flex: '1',
            padding: '10px',
            margin: '0 5px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Likes:</span>
          <br />
          <span style={{ fontSize: '16px' }}>{likes}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
