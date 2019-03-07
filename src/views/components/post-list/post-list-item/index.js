import React, { Fragment } from 'react';
import UserHeader from '../../user-header/index.js';

const PostListItem = ({ post }) => {
  const placeimgId = (id) => {
    const strId = String(id);
    return strId[strId.length - 1];
  };

  const { id, userId, title, body } = post;
  return <Fragment>
    <div className="radius bordered shadow card">
      <div className="card-section">
        <div className="media-object">
          <div className="media-object-section">
            <div className="thumbnail">
              <img 
                alt={ title }
                title={ title }
                src={ `https://placeimg.com/140/140/${placeimgId(id)}` } />
            </div>
          </div>
          <div className="media-object-section main-section">
            <h4>{ title }</h4>
            <p>{ body }</p>
            <UserHeader userId={ userId } />
          </div>
        </div>
      </div>
    </div>
  </Fragment>;
};

PostListItem.defaultProps = {
  post: null,
};

export default PostListItem;
