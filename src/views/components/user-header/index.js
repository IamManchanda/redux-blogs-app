import React from 'react';
import { connect } from 'react-redux';

const UserHeader = ({ user }) => {
  if (!user) return null;
  return <p><strong>{ user.name }</strong></p>;
};

UserHeader.defaultProps = {
  user: null,
  userId: 0,
};

export default connect(
  ({ users }, { userId }) => ({ user: users.find(u => u.id === userId) }),
  null,
)(UserHeader);
