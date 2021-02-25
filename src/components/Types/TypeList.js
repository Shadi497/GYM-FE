// Styling
import { ListWrapper, Title } from "../../styles";
// Components
import TypeItem from "../Types/TypeItem";
import SearchBar from "../SearchBar";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
// import Loading from "../Loading";
import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import AddButton from "../Buttons/AddButton";
import { fetchTypes } from "../../store/actions/typeActions";
import { fetchClases } from "../../store/actions/clasActions";

const TypeList = (props) => {
  const [query, setQuery] = useState("");
  const { gymId } = useParams();
  const user = useSelector((state) => state.authReducer.user);
  const fetch = useSelector((state) => state.typeReducer.fetch);
  const gym = useSelector((state) =>
    state.gymReducer.gyms.find((gym) => gym.id === +gymId)
  );
  const dispatch = useDispatch();

  if (!user) {
    return <Redirect to="/signin" />;
  }

  if (fetch && user) dispatch(fetchTypes());
  // if (user) dispatch(fetchClases());

  const typeList = props.types
    .filter((type) => type.type.toLowerCase().includes(query.toLowerCase()))
    .filter((type) => type.gymId === +gymId)
    .map((type) => <TypeItem type={type} key={type.id} />);

  const e = () => {
    toast.error("You don't have access to add types! ", {
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
        <title>Types </title>
      </Helmet>
      <Title>{gym ? gym.name : ""}</Title>
      <SearchBar setQuery={setQuery} />
      {user && user.isAdmin ? (
        <Link to={`/gyms/${gymId}/types/new`}>
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
        ""
      )}
      <ListWrapper>{typeList}</ListWrapper>
    </div>
  );
};

export default TypeList;
