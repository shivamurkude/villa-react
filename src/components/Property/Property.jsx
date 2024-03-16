import React from "react";
import Header from "../GlobalSubComponent/Header/Header";
import Main from "../Home/subcomponent/main/Main";

// Dependencies
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
const content = {
  title: "HOME / PROPERTIES",
  DES: "PROPERTIES",
};

const Property = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Properties"));

  const location = useLocation();
  const { offset } = location.state || {};
  scrollTop(offset);
  return (
    <div>
      <Header title={content.title} des={content.DES} />
      <Main />
    </div>
  );
};

export default Property;
