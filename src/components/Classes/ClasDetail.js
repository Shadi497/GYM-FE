import { useParams } from "react-router-dom";
import { ProductWrapper } from "../../styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchClases } from "../../store/actions/clasActions";

const ClasDetail = () => {
  const { classId } = useParams();
  const dispatch = useDispatch();
  dispatch(fetchClases());

  const clases = useSelector((state) => state.clasReducer.clases);
  const user = useSelector((state) => state.authReducer.user);
  const fetch = useSelector((state) => state.clasReducer.fetch);

  const cl = clases.find((cla) => cla.id === +classId);

  console.log(cl);

  return (
    <>
      <ProductWrapper>
        <h4>
          Name: <h1>{cl.name}</h1>
        </h4>
        <h4>
          Price: <h1>{cl.price}</h1>
        </h4>
        <h4>
          Date: <h1>{cl.date}</h1>
        </h4>
        <h4>
          Time: <h1>{cl.time}</h1>
        </h4>
        <h4>
          Number of seats:{" "}
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            {cl.numOfSeats}
          </h1>
        </h4>
        <h4>
          Booked Seats:{" "}
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            {cl.bookedSeats}
          </h1>
        </h4>
      </ProductWrapper>

      <button>Book</button>
    </>
  );
};

export default ClasDetail;
