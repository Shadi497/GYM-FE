// Styling
import { ListWrapper } from "../../styles";
// Components
import GymItem from "./GymItem";
import SearchBar from "../SearchBar";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import AddButton from "../Buttons/AddButton";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Redirect } from "react-router";

const GymList = () => {
  const [query, setQuery] = useState("");

  const gyms = useSelector((state) => state.gymReducer.gyms);
  const user = useSelector((state) => state.authReducer.user);

  const gymList = gyms
    .filter((gym) => gym.name.toLowerCase().includes(query.toLowerCase()))
    .map((gym) => <GymItem gym={gym} key={gym.id} />);

  const e = () => {
    toast.error("You don't have access to add gyms! ", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <Helmet>
        <title>Gyms </title>
      </Helmet>
      <SearchBar setQuery={setQuery} />
      {user && user.isAdmin ? (
        <Link to="/gyms/new">
          <AddButton />
        </Link>
      ) : user && !user.isAdmin ? (
        <button
          onClick={() => e()}
          type="button"
          class="btn btn-info mt-3 "
          style={{ marginLeft: "155px" }}
        >
          Add
        </button>
      ) : (
        <>
          <Link to="/signin">
            <AddButton />
          </Link>
        </>
      )}
      <ListWrapper>{gymList}</ListWrapper>
    </div>
  );
};

export default GymList;
