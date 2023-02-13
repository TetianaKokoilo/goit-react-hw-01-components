import React from 'react';
import ReactDOM from 'react-dom';
import user from './user.json';
// import { App } from 'components/App';
import './index.css';

const profile = (
  <div class="profile">
  <div class="description">
    <img
      src={user.avatar}
      alt={user.username}
      class="avatar"
    />
    <p class="name">{user.username}</p>
      <p class="tag">@{user.tag}</p>
      <p class="location">{user.location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
        <span class="quantity">{user.stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
        <span class="quantity">{user.stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
        <span class="quantity">{user.stats.likes}</span>
    </li>
  </ul>
  </div>
)



ReactDOM.render(profile, document.querySelector('#root'));






// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
