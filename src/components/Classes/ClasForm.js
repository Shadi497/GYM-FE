import { useState } from "react";
import { createClas } from "../../store/actions/clasActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { ListForm, Form, FormButton, H } from "../../styles";

const ClasForm = () => {
  const { typeId } = useParams();

  const [clas, setClas] = useState({
    name: "",
    numOfSeats: 0,
    bookedSeats: 0,
    price: 0,
    date: "",
    time: "",
    typeId: typeId,
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const handleChange = (event) => {
    setClas({ ...clas, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createClas(clas));

    history.push("/gyms");
  };

  return (
    <ListForm>
      <Form onSubmit={handleSubmit}>
        <H>Create Class</H>
        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Class Name
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={clas.name}
              type="text"
              name="name"
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Class Price
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={clas.price}
              type="number"
              name="price"
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Number of Seats
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={clas.numOfSeats}
              type="number"
              name="numOfSeats"
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Number of Booked Seats
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={clas.bookedSeats}
              type="number"
              name="bookedSeats"
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Date
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={clas.date}
              type="date"
              name="date"
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Time
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={clas.time}
              type="time"
              name="time"
              onChange={handleChange}
            />
          </div>
        </div>

        <FormButton>
          <button type="submit" class="btn btn-primary align-self-end">
            Create
          </button>
        </FormButton>
      </Form>
    </ListForm>
  );
};

export default ClasForm;
