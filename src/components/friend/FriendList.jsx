import PropTypes from 'prop-types';
import Friend from './Friend';

export default function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => {
        return (
          <li key={friend.id} class="item">
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
