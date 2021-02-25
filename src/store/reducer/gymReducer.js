const initialState = {
  gyms: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GYMS":
      return {
        ...state,
        gyms: action.payload,
        loading: false,
      };

    case "CREATE_GYM":
      const { newGym } = action.payload;
      return {
        ...state,
        gyms: [...state.gyms, newGym],
      };

    default:
      return state;
  }
};

export default reducer;
