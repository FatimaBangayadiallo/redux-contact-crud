import { createStore } from "redux";
import ContactReducer from "../reducers/ContactReducer";

const Store = createStore(ContactReducer);
export default Store;
