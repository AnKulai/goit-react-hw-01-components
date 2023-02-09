import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.scss';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, isOnline, name, avatar }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          name={name}
          avatar={avatar}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
