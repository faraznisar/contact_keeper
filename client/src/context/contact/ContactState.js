import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "testName1",
        type: "personal",
        phone: "123-121-111",
      },
      {
        id: 2,
        name: "Faraz",
        type: "professional",
        phone: "123-121-111",
      },
      {
        id: 3,
        name: "testName3",
        type: "professional",
        phone: "123-121-111",
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add contact
  const addContact = (contact) => {
    // contact.id = uuid;
    Math.random();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //Set current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  //Update contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  // Filter Contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        setCurrent,
        clearCurrent,
        addContact,
        deleteContact,
        filterContacts,
        clearFilter,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
