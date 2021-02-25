import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ListForm, Form, FormButton, H } from "../../styles";
import { signup } from "../../store/actions/authActions";
import { useForm } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

export default function Signup() {
  const [pass, setpass] = useState("password");

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    isAdmin: "",
  });

  const { register, errors, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const history = useHistory();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const Sub = (event) => {
    // event.preventDefault();
    dispatch(signup(user, history));
    return false;
  };

  const showPass = () => {
    pass === "password" ? setpass("text") : setpass("password");
  };

  return (
    <ListForm>
      <Form onSubmit={handleSubmit(Sub)}>
        <H>Sign Up</H>
        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            UserName
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={user.username}
              type="text"
              name="username"
              onChange={handleChange}
              ref={register({ required: true })}
            />
            {errors.username && "*User name is required"}
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Password
          </label>
          <div
            style={{ display: "flex", flexDirection: "column" }}
            class="col-sm-10 input-group mb-3"
          >
            <div style={{ display: "flex" }}>
              <input
                class="form-control"
                value={user.password}
                type={pass}
                name="password"
                onChange={handleChange}
                ref={register({ required: true })}
              />
              <span class="input-group-text" id="basic-addon2">
                {pass === "password" ? (
                  <AiFillEye size="1.5em" onClick={showPass} />
                ) : (
                  <AiFillEyeInvisible size="1.5em" onClick={showPass} />
                )}
              </span>
            </div>
            {errors.password && "*Password is required"}
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={user.email}
              type="email"
              name="email"
              onChange={handleChange}
              ref={register({ required: true })}
            />
            {errors.email && "*Email Address is required"}
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Member Type
          </label>
          <div class="col-sm-10">
            <select
              class="form-control"
              value={user.firstname}
              type="text"
              name="isAdmin"
              onChange={handleChange}
              ref={register({ required: true })}
            >
              <option value="">-- Choose your account type --</option>
              <option value="true">Admin</option>
              <option value="false">Member</option>
            </select>
            {errors.isAdmin && "*Type is required"}
          </div>
        </div>

        <FormButton>
          <button type="submit" class="btn btn-primary align-self-end">
            Sign Up
          </button>
        </FormButton>
      </Form>
    </ListForm>
  );
}
