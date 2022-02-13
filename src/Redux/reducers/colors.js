const initialState = {
  items: [],
};

const colors = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COLORS":
        console.log(initialState.items)
      return {
        ...state,
        items: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default colors;
