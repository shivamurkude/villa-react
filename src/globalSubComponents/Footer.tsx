// Dependencies
import { Divider, Image, Button, Listbox, ListboxItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

// Local Files
import "./Footer.css";
// import logo from "../../public/favicon.svg";

const contactInfo = [
  {
    name: "Phone",
    value: "+1 (845) 687-3270",
    icon: <FaPhone />,
  },
  {
    name: "Email",
    value: "support@hmsfreedom.com",
    icon: <MdEmail />,
  },
  {
    name: "Address",
    value: "Unit-544, McCabe Street, Port Charlotte, Florida, USA",
    icon: <IoLocation />,
  },
];

const footerLinks = [
  {
    type: "Navigation",
    data: [
      { key: "about", value: "About Us", link: "About-Us", state: {} },
      { key: "careers", value: "Careers", link: "Careers", state: {} },
      { key: "services", value: "Services", link: "Services", state: {} },
      { key: "contact", value: "Contact Us", link: "Contact-Us", state: {} },
      { key: "terms", value: "Terms & Conditions", link: "Terms-Conditions", state: {} },
      { key: "policy", value: "Policy of Use", link: "Policy-of-Use", state: {} },
      { key: "sitemap", value: "Sitemap", link: "Sitemap", state: {} },
      { key: "blog", value: "Blog", link: "Blog", state: {} },
    ],
  },
  {
    type: "Network Sites",
    data: [
      { key: "canada", value: "Villa Canada", link: "Villa-Canada", state: {} },
      { key: "uae", value: "Villa UAE", link: "Villa-UAE", state: {} },
      { key: "australia", value: "Villa Australia", link: "Villa-Australia", state: {} },
      { key: "urbanmoney", value: "Urban Money", link: "Urban-Money", state: {} },
      { key: "urbanmoneyaustralia", value: "Urban Money Australia", link: "Urban-Money-Australia", state: {} },
      { key: "interiorcompany", value: "Interior Company", link: "Interior-Company", state: {} },
      { key: "propvr", value: "PropVR", link: "PropVR", state: {} },
      { key: "propsamc", value: "PropsAMC", link: "PropsAMC", state: {} },
      { key: "azuro", value: "Azuro - Property Management", link: "Azuro-Property-Management", state: {} },
    ],
  },
  {
    type: "Solutions",
    data: [
      { key: "squareconnect", value: "Villa Connect", link: "Villa-Connect", state: {} },
      { key: "primeconnect", value: "Prime Connect", link: "Prime-Connect", state: {} },
      { key: "smartagent", value: "Smart Agent", link: "Smart-Agent", state: {} },
      { key: "realizing", value: "Realizing", link: "Realizing", state: {} },
      { key: "rentagreement", value: "Rent Agreement", link: "Rent-Agreement", state: {} },
      { key: "escrow", value: "Escrow", link: "Escrow", state: {} },
      { key: "bookpropertyonline", value: "Book Property Online", link: "Book-Property-Online", state: {} },
    ],
  },
  {
    type: "Resources",
    data: [
      { key: "dataintelligence", value: "Data Intelligence", link: "Data-Intelligence", state: {} },
      { key: "villareviews", value: "Villa Reviews", link: "Villa-Reviews", state: {} },
      { key: "realestateguide", value: "Real Estate Guide", link: "Real-Estate-Guide", state: {} },
      { key: "citiesrealestate", value: "Cities Real Estate", link: "Cities-Real-Estate", state: {} },
      { key: "awardsrecognition", value: "Awards & Recognition", link: "Awards-Recognition", state: {} },
      { key: "mediacoverage", value: "Media Coverage", link: "Media-Coverage", state: {} },
      { key: "glossary", value: "Glossary", link: "Glossary", state: {} },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[3rem] px-[4rem] gap-[2rem] text-black bg-white">
      <div className="w-[100%]">
        <Divider className="text-black" />
        <Divider className="text-black" />
        <Divider className="text-black" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-[5rem]">
        {footerLinks.map((ele, index) => (
          <div key={index} className="flex flex-col md:gap-[1rem]">
            <p className="font-['poppins'] text-[#F5A524] font-bold text-[1.1rem]">{ele.type}</p>
            <Listbox items={ele.data} aria-label="navigation" className="dark" variant="light">
              {(item) => (
                <ListboxItem key={item.key} className="px-0" textValue={item.key}>
                  <Link to={`../${item.link}`} state={item.state} className="hover:text-[#F5A524]">
                    {item.value}
                  </Link>
                </ListboxItem>
              )}
            </Listbox>
          </div>
        ))}
      </div>
      <div className="w-[100%]">
        <Divider className="text-black" />
        <Divider className="text-black" />
        <Divider className="text-black" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-start lg:items-center md:px-[4rem] gap-[4rem]">
        <div className="">
          <h1 className="text-xl font-bold text-[#F5A524] text-center md:text-start">About us</h1>
          <p className="text-center md:text-start">
          Discover unparalleled luxury with Villa.com. From romantic getaways to family reunions, our handpicked villas offer privacy, comfort, and exceptional hospitality. With seamless booking and personalized service, your dream vacation is just a click away. Experience the epitome of relaxation with Villa.com.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col gap-[2rem] contactInfo">
            {contactInfo.map((data, index) => (
              <div key={index} className="flex items-center gap-[1rem]">
                <Button isIconOnly variant="solid" radius="full" className="w-[3rem] h-[3rem] text-[1.5rem]">
                  {data.icon}
                </Button>
                <div className="font-['poppins']">
                  <h1 className="text-[#F5A524] font-bold text-[1.2rem]">{data.name}</h1>
                  <p className="text-sm max-w-[15rem]">{data.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col text-[2rem] gap-[1rem] p-[1rem] ">
            <h1 className="text-xl font-bold text-[#F5A524]">Find us Here</h1>
            <div className="flex flex-row gap-[2rem]">
              <a href="https://www.facebook.com/profile.php?id=61554936182745" target="_blank" rel="noreferrer">
                <SiFacebook className="mt-[0.4rem] cursor-pointer hover:scale-105" />
              </a>
              <a href="https://twitter.com/Kreativemachinz" target="_blank" rel="noreferrer">
                <FaSquareXTwitter className="mt-[0.4rem] cursor-pointer hover:scale-105" />
              </a>
            </div>
            <div className="flex flex-row gap-[2rem]">
              <a href="https://www.youtube.com/@KreativeMachinez-23" target="_blank" rel="noreferrer">
                <TbBrandYoutubeFilled className="mt-[0.4rem] cursor-pointer hover:scale-105" />
              </a>
              <a href="https://www.instagram.com/kreativemachinez23/" target="_blank" rel="noreferrer">
                <AiFillInstagram className="mt-[0.4rem] cursor-pointer hover:scale-105" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <Divider className="text-black" />
        <Divider className="text-black" />
        <Divider className="text-black" />
      </div>
      <p>© 2024 Villa • All Rights Reserved</p>
    </div>
  );
};

export default Footer;
