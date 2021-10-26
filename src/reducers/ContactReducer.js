const initialState = {
  contacts: [],
};

const ContactReducer = (state = initialState, action) => {
  // --------------------------add contact --------------------------action
  if (action.type === "ADD_CONTACT") {
    console.log("reducer", action.payload);
    return { ...state, contacts: [...state.contacts, action.payload] };
  }
  // -----------------------delete contact action------------------------------
  if (action.type === "DELETE_CONTACT") {
    const filteredContacts = state.contacts.filter(
      (contact) => contact.id !== action.payload
    );
    return { ...state, contacts: filteredContacts };
  }
  // -------------------------edit contact action------------------------------------------------
  if (action.type === "EDIT_CONTACT") {
    const updetedContacts = state.contacts.map((contact) => {
      if (contact.id === action.payload.id) {
        return action.payload.updatedContact;
      }
      return contact;
    });
    return { ...state, contacts: updetedContacts };
  } else {
    return state;
  }
};
export default ContactReducer;
