const initialState = {
  types: [],
  loading: true,
  fetch: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TYPES":
      return {
        ...state,
        types: action.payload,
        loading: false,
        fetch: false,
      };

    case "CREATE_TYPE":
      const { newType } = action.payload;
      return {
        ...state,
        types: [...state.types, newType],
      };

    default:
      return state;
  }
};

export default reducer;
