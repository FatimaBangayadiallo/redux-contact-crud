const initialState = {
  contacts: [],
};

const ContactReducer = (state = initialState, action) => {
  if (action.type === "ADD_CONTACT") {
    console.log("reducer", action.payload);
    return { ...state, contacts: [...state.contacts, action.payload] };
  } else {
    return state;
  }
};
export default ContactReducer;
