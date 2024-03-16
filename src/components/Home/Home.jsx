import Card from "./subcomponent/Card";
import CardDetails from "./subcomponent/CardDetails";
import Features from "./subcomponent/Features";
import Main from "./subcomponent/main/Main";
import Slider from "../GlobalSubComponent/Carasoul/Slider";
import Subsection from "../GlobalSubComponent/Subsection/Subsection";
import Head from "../GlobalSubComponent/ProductHead/Head";

// Dependencies
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));

  const location = useLocation();
  const { offset } = location.state || {};
  scrollTop(offset);
  return (
    <>
      <Slider />
      <Features />
      <Card />
      <CardDetails />
      <Head />
      <Subsection />
      <Main />
    </>
  );
};

export default Home;
