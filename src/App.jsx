import Profile from './components/profile/Profile';

import user from './components/jsonfiles/user';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        quantityFollowers={user.stats.followers}
        quantityViews={user.stats.views}
        quantityLikes={user.stats.likes}
      />
    </div>
  );
};
