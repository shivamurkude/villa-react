// Dependencies
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import EmailForm from "./subComponents/EmailForm";
import Header from "../GlobalSubComponent/Header/Header";
import Map from "./subComponents/Map";
const content = {
  title: "HOME / CONTACT",
  DES: "CONTACT",
};

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));

  const location = useLocation();
  const { offset } = location.state || {};
  scrollTop(offset);

  return (
    <>
      <Header title={content.title} des={content.DES} />
      <EmailForm />
      <div className="bg-white px-[4rem] py-[2rem]">
        <Map />
      </div>
    </>
  );
};

export default Contact;
