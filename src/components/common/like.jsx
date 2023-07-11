import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartColor } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartLonely } from "@fortawesome/free-regular-svg-icons";

const Like = ({ liked, onLike }) => {
  return (
    <button className="btn" onClick={onLike}>
      <FontAwesomeIcon icon={liked ? heartColor : heartLonely} />
    </button>
  );
};

export default Like;
