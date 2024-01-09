type StateType = {
  isAuth: boolean;
};
const initialState: StateType = {
  isAuth: false,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuth: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
