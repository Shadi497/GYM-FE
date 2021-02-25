import { useParams } from "react-router-dom";
import { ProductWrapper } from "../../styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchClases } from "../../store/actions/clasActions";
import { useState } from "react";
import MyClasses from "./MyClasses";
import { Link } from "react-router-dom";

const ClasDetail = () => {
  const { classId } = useParams();
  const [book, setBook] = useState(true);
  const clases = useSelector((state) => state.clasReducer.clases);
  const cl = clases.find((cla) => cla.id === +classId);
  let [bookseat, setBookSeat] = useState(cl.bookedSeats);

  // const dispatch = useDispatch();
  // dispatch(fetchClases());

  // const user = useSelector((state) => state.authReducer.user);
  // const fetch = useSelector((state) => state.clasReducer.fetch);

  // console.log(cl);

  const handlet = () => {
    setBook(!book);
  };

  const clasLis = clases
    .filter((cla) => cla.id === +classId)
    .map((clas) => <MyClasses clas={clas} />);

  return (
    <>
      <ProductWrapper>
        <h4>
          Name: <h1>{cl.name}</h1>
        </h4>
        <h4>
          Price: <h1>{cl.price === 0 ? "Free" : cl.price + " BD"} </h1>
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
            {book ? bookseat : +cl.bookedSeats + 1}
          </h1>
        </h4>
      </ProductWrapper>

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* <Link to={`/myclasses`}> */}
          <button
            type="button"
            class="btn btn-info mt-5 "
            style={{ width: "250px", marginLeft: "155px" }}
            onClick={handlet}
            disabled={book ? false : true}
          >
            {book ? "Book" : "Booked"}
          </button>
          {/* </Link> */}
          <button
            type="button"
            class="btn btn-info mt-5 "
            style={{ width: "250px", marginLeft: "155px" }}
            onClick={handlet}
            disabled={!book ? false : true}
          >
            {!book ? "Cancel" : "Canceled"}
          </button>
        </div>

        {!book && <p>{clasLis}</p>}
      </div>
    </>
  );
};

export default ClasDetail;
