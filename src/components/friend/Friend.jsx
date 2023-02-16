import css from './Friend.module.css';
import PropTypes from 'prop-types';

export default function Friend({ friend: { isOnline, avatar, name } }) {
  return (
    <div className={css.items}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
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
