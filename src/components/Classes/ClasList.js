import { Title } from "../../styles";
// Components
import SearchBar from "../SearchBar";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import AddButton from "../Buttons/AddButton";
import { fetchClases } from "../../store/actions/clasActions";
import ClasItem from "./ClasItem";
import { toast } from "react-toastify";

const ClasList = (props) => {
  const [query, setQuery] = useState("");
  const [free, setFree] = useState();
  const { typeId } = useParams();
  const user = useSelector((state) => state.authReducer.user);
  const fetch = useSelector((state) => state.clasReducer.fetch);
  const type = useSelector((state) =>
    state.typeReducer.types.find((type) => type.id === +typeId)
  );

  const dispatch = useDispatch();

  // if (user && fetch) dispatch(fetchClases());

  if (!user) {
    return <Redirect to="/signin" />;
  }

  const handlet = () => {
    setFree(0);
  };
  const handleo = () => {
    setFree(1);
  };
  const handl = () => {
    setFree();
  };

  const clasList = props.clases
    .filter((clas) =>
      free === 0 ? clas.price === 0 : free === 1 ? clas.price > 0 : ""
    )
    .filter((clas) => clas.name.toLowerCase().includes(query.toLowerCase()))
    .filter((clas) => clas.typeId === +typeId)
    .map((clas) => <ClasItem clas={clas} free={free} />);

  const clasLis = props.clases
    .filter((clas) => clas.name.toLowerCase().includes(query.toLowerCase()))
    .filter((clas) => clas.typeId === +typeId)
    .map((clas) => <ClasItem clas={clas} free={free} />);

  const e = () => {
    toast.error("You don't have access to add classes! ", {
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
        <title>Clases </title>
      </Helmet>
      <Title>{type ? type.type : ""}</Title>
      <div
        style={{
          marginLeft: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SearchBar setQuery={setQuery} />

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="free"
            onClick={handlet}
            name="free"
          />
          <label class="form-check-label" for="flexCheckIndeterminate">
            free
          </label>
          <div>
            <input
              class="form-check-input"
              type="radio"
              value="not"
              onChange={handleo}
              name="free"
            />
            <label class="form-check-label" for="flexCheckIndeterminate">
              not free
            </label>
          </div>
          <div>
            <input
              class="form-check-input"
              type="radio"
              value="not"
              onChange={handl}
              name="free"
            />
            <label class="form-check-label" for="flexCheckIndeterminate">
              whole list
            </label>
          </div>
        </div>
      </div>

      {user && user.isAdmin ? (
        <Link to={`/types/${typeId}/classes/new`}>
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
      <div class="container" style={{ margin: "60px 50px 0 350px" }}>
        <div class="row">
          {typeof free === "undefined" ? clasLis : clasList}
        </div>
      </div>
    </div>
  );
};

export default ClasList;
