import Profile from './components/profile/Profile';
import user from './components/jsonfiles/user';

import Statistics from './components/statistics/Statistics';
import data from './components/jsonfiles/data';

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


    </div>
  );
};
