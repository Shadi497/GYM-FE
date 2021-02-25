import { Logo, Logoimg, NavProduct } from "../styles";
import { FaSignOutAlt } from "react-icons/fa";
import img from "../gym.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../store/actions/authActions";
import { BsMoon } from "react-icons/bs";
import { ImSun } from "react-icons/im";

export default function NavBar(props) {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand ">
      <Logo to="/">
        <Logoimg src={img} />
      </Logo>
      <div className="navbar ml-auto">
        {user ? (
          <>
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "15px 25px 0 0",
                // padding: "25px 25px 0 0",
              }}
            >
              <b>Welcome, {user.username} !</b>
              <FaSignOutAlt onClick={() => dispatch(signout())} />
            </p>
          </>
        ) : (
          <>
            <Link to={"/signup"}>
              <button
                type="button"
                class={
                  props.currentTheme === "light"
                    ? "btn btn-outline-success mt-3 mr-4"
                    : "btn btn-success mt-3 mr-4"
                }
              >
                Sign Up
              </button>
            </Link>

            <Link to={"/signin"}>
              <button
                type="button"
                class={
                  props.currentTheme === "light"
                    ? "btn btn-outline-success mt-3 mr-4"
                    : "btn btn-success mt-3 mr-4"
                }
              >
                Sign In
              </button>
            </Link>
          </>
        )}
        <NavProduct exact to="/gyms">
          Gyms
        </NavProduct>

        {user && (
          <NavProduct exact to="/gyms">
            Types & Classes
          </NavProduct>
        )}

        {props.currentTheme === "light" ? (
          <BsMoon onClick={props.toggleTheme} size="1.5em" />
        ) : (
          <ImSun onClick={props.toggleTheme} size="1.5em" />
        )}
      </div>
    </nav>
  );
}
