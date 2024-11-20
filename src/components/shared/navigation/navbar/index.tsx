import {
  Navbar as NavbarUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";

import { Theme } from "./Theme-toggler";

const Navbar = () => {
  return (
    <NavbarUI className=" background-dark400_light900 mb-10 rounded-md shadow-light-200">
      <NavbarBrand>
        <Image
          src="/assets/images/AIMS.png"
          width={60}
          height={60}
          alt="AIMS logo"
        />
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Theme />
        </NavbarItem>
      </NavbarContent>
    </NavbarUI>
  );
};

export default Navbar;
