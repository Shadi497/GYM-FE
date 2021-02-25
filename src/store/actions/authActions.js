import instance from "./instance";
import decode from "jwt-decode";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const setUser = (token) => {
  Cookies.set("Token", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: "SET_USER",
    payload: decode(token),
  };
};

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      dispatch(setUser(res.data.token));
      toast.info("Your account has been successfully created !!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.replace("/");
    } catch (error) {
      console.error(error);
    }
  };
};

export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch(setUser(res.data.token));
      toast.success("Welcome! Check out our new classes.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.replace("/");
    } catch (error) {}
  };
};

export const signout = () => {
  Cookies.remove("Token");
  delete instance.defaults.headers.common.Authorization;
  toast.error("See YOU Soon 😢 ", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  return {
    type: "SET_USER",
    payload: null,
  };
};

export const checkToken = () => (dispatch) => {
  const token = Cookies.get("Token");
  if (token) {
    const user = decode(token);
    if (Date.now() < user.exp) {
      dispatch(setUser(token));
    } else {
      dispatch(signout());
    }
  }
};
