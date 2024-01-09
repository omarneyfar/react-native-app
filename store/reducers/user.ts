import { User } from "../../types/user/User";

type StateType = {
  userData: User | {};
};
const initialState: StateType = {
    userData: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
