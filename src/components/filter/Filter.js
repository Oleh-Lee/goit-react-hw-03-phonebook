import React from "react";
import PropTypes from "prop-types";

const Filter = ({ getName }) => (
  <>
    <p>Find contact by name</p>
    <input type="text" onChange={getName} />
  </>
);

Filter.propTypes = {
  getName: PropTypes.func.isRequired
};

export default Filter;
