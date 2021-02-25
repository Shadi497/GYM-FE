import { Redirect, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";
// Components
import TypeList from "./Types/TypeList";
// // Data
// import TypeDetail from "./Types/TypeDetail";
import TypeForm from "./Types/TypeForm";
import GymList from "./Gyms/GymList";
// import GymDetail from "./Gyms/GymDetail";
import GymForm from "./Gyms/GymForm";
import Signup from "./Authentication/Signup";
import Signin from "./Authentication/Signin";
import GymItem from "./Gyms/GymItem";
import ClasList from "./Classes/ClasList";
import { fetchClases } from "../store/actions/clasActions";
import { useSelector, useDispatch } from "react-redux";
import ClasForm from "./Classes/ClasForm";
import ClasDetail from "./Classes/ClasDetail";
import MyClasses from "./Classes/MyClasses";

export default function Routes() {
  const types = useSelector((state) => state.typeReducer.types);

  const clases = useSelector((state) => state.clasReducer.clases);

  const dispatch = useDispatch();
  dispatch(fetchClases());
  return (
    <Switch>
      <Route exact path={"/gyms/:gymId/types/new"}>
        <TypeForm />
      </Route>

      <Route exact path="/gyms/new">
        <GymForm />
      </Route>

      <Route exact path="/types/:typeId">
        <ClasList clases={clases} />
      </Route>

      <Route exact path="/types/:typeId/classes/new">
        <ClasForm />
      </Route>

      <Route exact path="/gyms/:gymId">
        <TypeList types={types} />
      </Route>

      <Route exact path="/classes/:classId">
        <ClasDetail />
      </Route>

      <Route exact path="/myclasses">
        <MyClasses />
      </Route>

      <Route path="/gyms">
        <GymList />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/signin">
        <Signin />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
}
