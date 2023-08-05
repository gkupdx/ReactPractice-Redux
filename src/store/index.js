// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/counter-slice";
import authReducer from "../store/auth-slice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }
});

export default store;

/* Redux (core) version */
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.payload,
//       showCounter: state.showCounter
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);
