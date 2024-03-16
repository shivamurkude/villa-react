// Dependencies
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarBrand,
  Divider,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

// Local Files
import "./NavBar.css";
import { RootState } from "../store/store";
import { updateNavStatus } from "../store/navOpenStatusSlice";
import { updateToLoginStatus } from "../store/toLoginSlice";
import ButtonElement from "../globalElements/ButtonElement";
import UserAvatar from "./UserAvatar";
import { getCookie } from "../utils/cookies";
const menuItems = ["Homee", "About", "Contact", "Log In"];

const NavBar = () => {
  const isLoggedIn = getCookie("token") ? true : false;
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const navOpenStatus = useSelector((state: RootState) => state.navOpenStatus.value);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar
        isMenuOpen={navOpenStatus}
        onMenuOpenChange={() => {
          dispatch(updateNavStatus(!navOpenStatus));
        }}
        className="h-[2rem] py-[1.2rem] nav z-[200] font-serif bg-white justify-center hidden lg:flex "
        maxWidth="xl"
        isBordered
      >
        <NavbarContent className="hidden lg:flex" justify="center">
          <NavbarItem>
            <div className="flex flex-row gap-2">
              <MdEmail className="text-orange-500 mt-1" size={17} />
              <span className="text-zinc-500 text-md">support@villa.com</span>
            </div>
          </NavbarItem>
          <Divider orientation="vertical" />
          <NavbarItem>
            <div className="flex flex-row gap-2">
              <FaLocationDot className="text-orange-500 mt-1" size={17} />
              <span className="text-zinc-500 text-md">Sunny Isles Beach, FL 33160</span>
            </div>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="hidden lg:flex" justify="center">
          <div className="flex flex-row gap-x-4 cursor-pointer">
            <FaInstagram size={18} className="text-zinc-400" />
            <FaSquareFacebook size={18} className="text-zinc-400" />
            <FaLinkedin size={18} className="text-zinc-400" />
            <FaTwitter size={18} className="text-zinc-400" />
          </div>
        </NavbarContent>
      </Navbar>
      <Navbar
        isMenuOpen={navOpenStatus}
        onMenuOpenChange={() => {
          dispatch(updateNavStatus(!navOpenStatus));
        }}
        className="h-[5rem] nav z-[200] font-serif bg-white"
        maxWidth="xl"
      >
        <NavbarContent>
          <NavbarMenuToggle aria-label={navOpenStatus ? "Close menu" : "Open menu"} className="lg:hidden text-black" />
          <NavbarBrand className="order-1 hidden lg:flex">
            <Link to="/" className="font-bold text-inherit font-serif text-2xl text-black">
              VILLA.COM
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="lg:hidden logo font-serif">
          <Link to="../Home">VILLA.COM</Link>
        </NavbarContent>
        <NavbarContent className="hidden lg:flex" justify="center">
          <NavbarItem>
            <Link
              to="../Home"
              className={curTab === "Home" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
            >
              HOME
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="../Properties"
              className={curTab === "Properties" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
            >
              PROPERTIES
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="../Details"
              className={curTab === "Details" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
            >
              DETAILS
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="../Contact"
              className={curTab === "Contact" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
            >
              CONTACT US
            </Link>
          </NavbarItem>
        </NavbarContent>
        {isLoggedIn ? (
          <NavbarContent justify="end">
            <NavbarItem>
              <UserAvatar />
            </NavbarItem>
          </NavbarContent>
        ) : (
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <ButtonElement
                to="../Auth"
                variant="bordered"
                label="Login"
                radius="sm"
                size="md"
                className="w-full px-[8px] py-[10px]  text-black"
                onClickFunction={() => dispatch(updateToLoginStatus(true))}
              />
            </NavbarItem>
            <NavbarItem>
              <ButtonElement
                to="../Auth"
                size="md"
                variant="solid"
                label="Sign Up"
                radius="sm"
                className="w-full px-[8px] py-[10px] bg-orange-500 text-white"
                onClickFunction={() => dispatch(updateToLoginStatus(false))}
              />
            </NavbarItem>
          </NavbarContent>
        )}

        <NavbarMenu className="mt-[1rem] bg-[rgba(0,0,0,0.4)] z-[200]">
          {menuItems.map((item, index) => {
            return (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className={curTab === item ? "active" : "notActive"}
                  to={index === 6 ? "../Auth" : `../${item}`}
                  onClick={() => {
                    dispatch(updateNavStatus(!navOpenStatus));
                    dispatch(updateToLoginStatus(item === "Log In" ? true : false));
                  }}
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavBar;
