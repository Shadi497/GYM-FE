import instance from "./instance";

export const fetchGyms = () => {
  return async (dispatch) => {
    try {
      // console.log("fetching gyms");
      const res = await instance.get(`/gyms`);
      dispatch({
        type: "FETCH_GYMS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createGym = (newGym) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newGym) formData.append(key, newGym[key]);
      const res = await instance.post("/gyms/new", formData);
      dispatch({
        type: "CREATE_GYM",
        payload: { newGym: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
