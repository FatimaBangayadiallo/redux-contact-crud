//  actions creator
// person who submit the form contact

export const AddContact = (newContact) => {
  return {
    type: "ADD_CONTACT",
    payload: newContact,
  };
};
