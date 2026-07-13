export const initialState = {
  products: [],
};

export const ACTIONS = {
  FETCH_PRODUCT_SUCCESS: "fetch_product_success",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.products,
      };

      default:
        return state;
  }
};

export default reducer;
