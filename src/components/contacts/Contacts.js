/** @format */

import React from "react";

const Contacts = ({ name, number, deleteContact, id }) => {
  const remuvContact = () => {
    deleteContact(id);
  };
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={remuvContact}>
        Delete
      </button>
    </li>
  );
};

export default Contacts;
