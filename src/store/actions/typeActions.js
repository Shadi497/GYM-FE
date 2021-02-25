import instance from "./instance";

export const fetchTypes = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/types");
      dispatch({
        type: "FETCH_TYPES",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const deleteType = (typeId) => {
//   return async (dispatch) => {
//     try {
//       await instance.delete(`/types/${typeId}`);
//       dispatch({
//         type: "DELETE_TYPE",
//         payload: { typeId },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
export const createType = (newType) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(`/gyms/${newType.gymId}/types`, newType);
      dispatch({
        type: "CREATE_TYPE",
        payload: { newType: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// export const updateType = (updatedType) => {
//   return async (dispatch) => {
//     try {
//       const formData = new FormData();
//       for (const key in updatedType)
//         formData.append(key, updatedType[key]);
//       const res = await instance.put(
//         `/types/${updatedType.id}`,
//         formData
//       );
//       dispatch({
//         type: "UPDATE_TYPE",
//         payload: { updatedType: res.data },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
