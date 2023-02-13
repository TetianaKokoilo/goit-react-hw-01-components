// import PropTypes from 'prop-types';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  quantityFollowers,
  quantityLikes,
  quantityViews,
}) {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={username} class="avatar" />
        <p class="name">{username}</p>
        <p class="location">{location}</p>
        <p class="tag">@{tag}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{quantityFollowers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{quantityViews}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{quantityLikes}</span>
        </li>
      </ul>
    </div>
  );
}
