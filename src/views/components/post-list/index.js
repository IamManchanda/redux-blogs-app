import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import { handleFetchingPostsAndUsers } from '../../../store/actions';
import PostListItem from './post-list-item';

const PostList = class extends Component {
  componentDidMount() {
    const { handleFetchingPostsAndUsers } = this.props;
    handleFetchingPostsAndUsers();
  }

  render() {
    const { posts } = this.props;
    return <Fragment>
      { posts.length ? posts.map(post => <PostListItem 
          key={ post.id } 
          post={ post } 
        />) : null }
    </Fragment>;
  }
};

PostList.defaultProps = {
  posts: [],
  handleFetchingPostsAndUsers: () => {},
};

export default connect(
  ({ posts }) => ({ posts }), 
  { handleFetchingPostsAndUsers },
)(PostList);
