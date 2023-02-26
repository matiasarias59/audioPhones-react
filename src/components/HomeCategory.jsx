import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function HomeCategory(props) {
  return (
    <Link to={`/categoria/${props.name}`}>
    <div className="home__category">
      <div className="home__category__icon">
        <FontAwesomeIcon icon={props.icon} color="red" size="4x" />
      </div>
      <div className="home__category__name">{`${props.name}`}</div>
    </div>
    </Link>
  );
}
