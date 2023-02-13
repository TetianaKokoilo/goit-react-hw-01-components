import Profile from './components/profile/Profile';
import user from './components/jsonfiles/user';
import Statistics from './components/statistics/Statistics';
import data from './components/jsonfiles/data';
import FriendList from './components/friend/FriendList'
import friends from './components/jsonfiles/friends';
import TransactionHistory from './components/transition/TransactionHistory';
import transactions from './components/jsonfiles/transactions';



export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        quantityFollowers={user.stats.followers}
        quantityViews={user.stats.views}
        quantityLikes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

    </div>
  );
};
