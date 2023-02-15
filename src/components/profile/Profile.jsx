import css from './Profile.module.css';
import PropTypes from 'prop-types';
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
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.location}>{location}</p>
        <p className={css.tag}>@{tag}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.info}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{quantityFollowers}</span>
        </li>
        <li className={css.info}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{quantityViews}</span>
        </li>
        <li className={css.info}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{quantityLikes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  quantityFollowers: PropTypes.number.isRequired,
  quantityViews: PropTypes.number.isRequired,
  quantityLikes: PropTypes.number.isRequired,
};