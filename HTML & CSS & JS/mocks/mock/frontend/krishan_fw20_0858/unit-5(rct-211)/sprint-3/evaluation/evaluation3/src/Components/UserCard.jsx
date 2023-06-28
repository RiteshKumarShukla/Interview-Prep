import React from "react";
import "./UserCard.css";
import PropTypes from 'prop-types';
const UserCard = ({imageURL,name,title,description='Testing Description',avatarShape,backgroundColor='red'}) => {

  return (
    <div data-testid="usercard" className={`usercard ${backgroundColor}`}>
      <img src={imageURL} alt={title} className={`userImage ${avatarShape==='square'? 'square' : 'round'}`} />
      <div className={`userInformation`}>
        <p className="userName">{name}</p>
        <p className="userTitle">{title}</p>
        <p className="userDescription">{description}</p>
      </div>

    </div>
  );
};

export default UserCard;


UserCard.propTypes = {
  imageURL:PropTypes.string.isRequired,
  avatarShape:PropTypes.oneOf(['round','square']),
  name:PropTypes.string.isRequired,
  backgroundColor:PropTypes.string,
  title:PropTypes.string
}