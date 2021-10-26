//  actions creator
// person who submit the form contact
// add contact---------------------------------
export const AddContact = (newContact) => {
  newContact.id = Math.random().toString(36).slice(2);
  return {
    type: "ADD_CONTACT",
    payload: newContact,
  };
};
// delete contact-----------------------------------------
export const deleteContact = (id) => {
  console.log("id from action delete", id);
  return {
    type: "DELETE_CONTACT",
    payload: id,
  };
};
// edit contact action----------------------------------------------------
export const EditContact = (id, updatedContact) => {
  return {
    type: "EDIT_CONTACT",
    payload: { id, updatedContact },
  };
};
