import { createStore } from "redux";
import rootered from "./redux/reducer/Main";

const store = createStore(rootered);

export default store;
