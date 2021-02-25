import { Description, Img, TitleH } from "../styles";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page </title>
      </Helmet>
      <TitleH>
        <b>Welcome to Fitness Factory</b>
      </TitleH>
      {/* <Description>A better way to shop for health & beauty!</Description> */}
    </>
  );
};

export default Home;
