import {ADD_USERS} from "../actions/action.js";

const initState = {
  Users: []
}

const Users = (state = initState, action) => {
  switch (action.type) {
    case ADD_USERS:
      console.log("success");
      console.log({Users:[...state.Users, {name:action.payload}]});
      return {Users:[...state.Users, {name:action.payload}]};
    default:
      return initState;
  }
}

export default Users;
