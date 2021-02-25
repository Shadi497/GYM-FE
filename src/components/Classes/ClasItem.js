import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchClases } from "../../store/actions/clasActions";

const ClasItem = (props) => {
  const clas = props.clas;
  const dispatch = useDispatch();
  // dispatch(fetchClases());

  return (
    <div
      class="card ml-5 mb-3 bg-secondary"
      style={{
        width: "18rem",
      }}
    >
      <div class="card-body">
        <Link to={`/classes/${clas.id}`} style={{ color: "white" }}>
          <h5 class="card-title">{clas.name}</h5>
        </Link>
        <h6 class="card-subtitle mb-2  text-right" style={{ color: "white" }}>
          {clas.price === 0 ? "Free" : clas.price + " BD"}
        </h6>
      </div>
    </div>
  );
};

export default ClasItem;
