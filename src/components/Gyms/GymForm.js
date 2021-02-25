import { useState } from "react";
import { createGym } from "../../store/actions/gymActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ListForm, Form, FormButton, H } from "../../styles";

const GymForm = () => {
  const [gym, setGym] = useState({
    name: "",
    image: "",
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const handleChange = (event) => {
    setGym({ ...gym, [event.target.name]: event.target.value });
  };
  const handleImage = (event) => {
    setGym({ ...gym, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createGym(gym));

    history.push("/gyms");
  };

  return (
    <ListForm>
      <Form onSubmit={handleSubmit}>
        <H>Create Gym</H>
        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Gym Name
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={gym.name}
              type="text"
              name="name"
              onChange={handleChange}
            />{" "}
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Gym Image
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              type="file"
              name="image"
              onChange={handleImage}
            />{" "}
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

export default GymForm;
