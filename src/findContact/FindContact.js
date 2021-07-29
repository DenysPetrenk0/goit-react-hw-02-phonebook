/** @format */

import React from "react";

const FindContact = ({ onHandleChange, filter }) => {
  return (
    <>
      Find Contsct by Name:
      <input
        type="text"
        value={filter}
        name="filter"
        autoComplete="off"
        onChange={onHandleChange}
      />
    </>
  );
};

export default FindContact;
