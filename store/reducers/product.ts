import { Product } from "../../types/product/Product";

type StateType = {
  products: Product[] | [];
};
const initialState: StateType = {
  products: [],
};

const productReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }

  return state;
};

export default productReducer;
