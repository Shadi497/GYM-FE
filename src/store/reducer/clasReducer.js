const initialState = {
  clases: [],
  loading: true,
  fetch: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CLASES":
      return {
        ...state,
        clases: action.payload,
        loading: false,
        fetch: false,
      };

    case "CREATE_CLAS":
      const { newClass } = action.payload;
      return {
        ...state,
        clases: [...state.clases, newClass],
      };

    default:
      return state;
  }
};

export default reducer;
