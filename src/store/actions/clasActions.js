import instance from "./instance";

export const fetchClases = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/classes");
      dispatch({
        type: "FETCH_CLASES",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const deleteClas = (typeId) => {
//   return async (dispatch) => {
//     try {
//       await instance.delete(`/types/${typeId}`);
//       dispatch({
//         type: "DELETE_CLAS",
//         payload: { typeId },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
export const createClas = (newClas) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(
        `/types/${newClas.typeId}/classes`,
        newClas
      );
      dispatch({
        type: "CREATE_CLAS",
        payload: { newClas: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// export const updateClas = (updatedClas) => {
//   return async (dispatch) => {
//     try {
//       const formData = new FormData();
//       for (const key in updatedClas)
//         formData.append(key, updatedClas[key]);
//       const res = await instance.put(
//         `/types/${updatedClas.id}`,
//         formData
//       );
//       dispatch({
//         type: "UPDATE_CLAS",
//         payload: { updatedClas: res.data },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
