// Styling
import { NavTp, ProductWrappert } from "../../styles";
import { Link } from "react-router-dom";

const TypeItem = (props) => {
  const type = props.type;

  return (
    <ProductWrappert>
      <NavTp to={`/types/${type.id}`}>
        <h1>{type.type}</h1>
      </NavTp>
    </ProductWrappert>
  );
};

export default TypeItem;
