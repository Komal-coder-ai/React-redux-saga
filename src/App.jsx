import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import PostList from './components/PostList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Posts</h1>
        <PostList />
      </div>
    </Provider>
  );
};

export default App;
