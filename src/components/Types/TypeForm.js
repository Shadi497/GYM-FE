import { useState } from "react";
import { createType } from "../../store/actions/typeActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { ListForm, Form, FormButton, H } from "../../styles";

const TypeForm = () => {
  const { gymId } = useParams();

  const [type, setType] = useState({
    type: "",
    gymId: gymId,
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const handleChange = (event) => {
    setType({ ...type, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createType(type));

    history.push("/gyms");
  };

  return (
    <ListForm>
      <Form onSubmit={handleSubmit}>
        <H>Create Type</H>
        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Type Name
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={type.type}
              type="text"
              name="type"
              onChange={handleChange}
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

export default TypeForm;
