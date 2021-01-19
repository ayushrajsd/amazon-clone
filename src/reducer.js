export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  console.log(action.item);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      //LOGIC FOR BASKET UPDATE
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //Logic
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.item.id),
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
}

export default reducer;
