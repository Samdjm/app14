import React from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

function LastName() {
  const { nom } = useContext(UserContext);

  return (
    <span
      style={{
        color: "whitesmoke",
        fontWeight: "bold",
        fontSize: "20px",
        margin: "0 5px",
      }}
    >
      {nom}
    </span>
  );
}

LastName.propTypes = {};

export default LastName;
