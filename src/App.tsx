// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Local Files
import NavBar from "./globalSubComponents/NavBar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Auth from "./components/Auth/Auth";
import Footer from "./globalSubComponents/Footer";
import { RootState } from "./store/store";
import HomeHero from "./globalAssets/HomeHero.jpg";
import AboutHero from "./globalAssets/About.jpg";
import ContactHero from "./globalAssets/Contact.jpg";
import PricingHero from "./globalAssets/Prices.jpg";
import ServiceHero from "./globalAssets/Services.jpg";
import PrivacyHero from "./globalAssets/privacy.jpg";
import PasswordReset from "./components/ForgetPassword/PasswordReset";
import Property from "./components/Property/Property";
import Details from "./components/PropertyDetails/Details";
function App() {
  const curTab = useSelector((state: RootState) => state.curTab.value);

  let className = "";
  let background = "linear-gradient(rgba(0,0,0,0.3) 20%,rgba(0,0,0,0.2))";

  switch (curTab) {
    case "Home":
      className = "bg-no-repeat bg-top lg:bg-right-top bg-cover";
      background += `,url(${HomeHero})`;
      break;

    case "Properties":
      className = "bg-no-repeat bg-top";
      background += `,url(${AboutHero})`;
      break;

    case "Contact":
      className = "bg-no-repeat bg-top";
      background += `,url(${ContactHero})`;
      break;
    default:
      break;
  }
  return (
    <>
      <div style={{ backgroundImage: background }} className={className}>
        {curTab === "Auth" || curTab === "Password Reset" ? null : <NavBar />}
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/ResetPassword" element={<PasswordReset />} />
          <Route path="*" element={<Navigate to="/Home" />} />
          <Route path="/Properties" element={<Property />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </div>
      {curTab === "Auth" || curTab === "Password Reset" ? null : <Footer />}
    </>
  );
}

export default App;
