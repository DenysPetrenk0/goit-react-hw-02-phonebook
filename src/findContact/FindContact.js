/** @format */

import React from "react";

const FindContact = ({ onHandleChange }) => {
  return (
    <>
      Find Contsct by Name:
      <input
        type="text"
        name="filter"
        autoComplete="off"
        onChange={onHandleChange}
      />
    </>
  );
};

export default FindContact;
