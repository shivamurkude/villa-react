import React from 'react'
import Header from '../GlobalSubComponent/Header/Header'
import Head from '../GlobalSubComponent/ProductHead/Head';
import Subsection from '../GlobalSubComponent/Subsection/Subsection';

// Dependencies
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
const  content = {
    title:"HOME/SINGLE PROPERTY",
    DES:"SINGLE PROPERTY"
}
const Details = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Details"));

  const location = useLocation();
  const { offset } = location.state || {};
  scrollTop(offset);
  return (
    <div>
      <Header title={content.title} des={content.DES} />
      <Head />
      <Subsection />
    </div>
  );
}

export default Details