import PropTypes from 'prop-types';

export default function Friend({ friend: { isOnline, avatar, name } }) {
  return (
    <div>
      <span class="status"> {isOnline === true ? 'online' : 'ofline'}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </div>
  );
}

Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
