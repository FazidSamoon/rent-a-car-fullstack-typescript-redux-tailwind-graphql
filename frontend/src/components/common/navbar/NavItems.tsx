import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../../responsive";
import MenuStyles from "./MenuStyles";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const NavItems = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile) {
    return (
      <Menu right styles={MenuStyles}>
        <ul className="flex list-none">
          {navItems.map((item, index) => (
            <Link to={item.link} key={index} className=" ">
              <li className="mt-4 md:mt-0 mr-2 md:mr-4 text-xl text-white focus:text-white hover:text-gray-700 cursor-pointer font-medium transition ease-in-out duration-500">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </Menu>
    );
  }
  return (
    <ul className="flex list-none">
      {navItems.map((item, index) => (
        <Link to={item.link} key={index}>
          <li className="mr-2 md:mr-4 text-xs md:text-base text-black hover:text-gray-700 cursor-pointer font-medium transition ease-in-out duration-500">
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavItems;
