import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import Friend from './Friend';

export default function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css.item}>
            <Friend friend={friend} />
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
