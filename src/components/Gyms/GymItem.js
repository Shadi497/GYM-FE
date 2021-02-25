import { ProductWrappert } from "../../styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const GymItem = (props) => {
  const gym = props.gym;
  const user = useSelector((state) => state.authReducer.user);

  return (
    <ProductWrappert>
      {user ? (
        <>
          <Link to={`/gyms/${gym.id}`}>
            <img alt={gym.name} src={gym.image} />
          </Link>
          <p>{gym.name}</p>
        </>
      ) : (
        <>
          <Link to={`/signin`}>
            <img alt={gym.name} src={gym.image} />
          </Link>
          <p>
            <b>{gym.name}</b>
          </p>
        </>
      )}
    </ProductWrappert>
  );
};

export default GymItem;
