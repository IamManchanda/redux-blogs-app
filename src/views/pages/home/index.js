import React, { Fragment } from 'react';
import PostList from '../../components/post-list';

const App = () => <Fragment>
  <div className="grid-x grid-padding-x grid-padding-y">
    <div className="cell">
      <PostList/>
    </div>
  </div>
</Fragment>;

export default App;
