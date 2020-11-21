import AppsIcon from "@material-ui/icons/Apps";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

interface Props {}

const Navigation: React.FC<Props> = (props) => {
  const [showSideDrawer, setSideDrawer] = useState<boolean>(false);

  return (
    <>
      <Sidebar
        open={showSideDrawer}
        closeSidebarHandle={() => setSideDrawer(false)}
      />
      <Navbar sidebarToggleClick={() => setSideDrawer(!showSideDrawer)} />
    </>
  );
};

interface SidebarProps {
  open: boolean;
  closeSidebarHandle: () => void;
}
const Sidebar = (props: SidebarProps) => {
  let attachClass = ["sidebar", "sidebar-close"];
  if (props.open) attachClass = ["sidebar", "sidebar-open"];
  return (
    <div className={attachClass.join(" ")}>
      <div className="close-icon" onClick={props.closeSidebarHandle}>
        <CloseIcon />
      </div>
      <NavItems />
    </div>
  );
};

interface NavbarProps {
  sidebarToggleClick: () => void;
}
const Navbar = (props: NavbarProps) => {
  return (
    <div className="navbar">
      <div className="mobile-only" onClick={props.sidebarToggleClick}>
        <AppsIcon />
      </div>
      <nav className={"desktop-only"}>
        <NavItems />
      </nav>
    </div>
  );
};

interface NavItemsProps {}
const NavItems = (props: NavItemsProps) => {
  const router = useRouter();

  return (
    <div className="nav-items">
      <NavItem
        href="/"
        title="HOME"
        activeClassName={router.pathname === "/" ? "active" : ""}
      />
      <NavItem
        href="/products"
        title="PRODUCTS"
        activeClassName={
          router.pathname === "/products" ||
          router.pathname === "/products/alloy-carbon-steel-plates" ||
          router.pathname === "/products/honed-seamless-tubes" ||
          router.pathname === "/products/chrome-plated-rod" ||
          router.pathname === "/products/stainless-steel-seamless-pipes" ||
          router.pathname === "/products/high-speed-tool-steel" ||
          router.pathname === "/products/steel-coils-sheets" ||
          router.pathname === "/products/galvanized-ppgi-steel-coil" ||
          router.pathname === "/products/hydraulic-cylinders"
            ? "active"
            : ""
        }
      />
      <NavItem
        href="/our-facility"
        title="OUR FACITLITY"
        activeClassName={router.pathname === "/our-facility" ? "active" : ""}
      />
      <NavItem
        href="/about"
        title="ABOUT US"
        activeClassName={router.pathname === "/about" ? "active" : ""}
      />
      <NavItem
        href="/contact"
        title="CONTACT"
        activeClassName={router.pathname === "/contact" ? "active" : ""}
      />
    </div>
  );
};

interface NavItemProps {
  href: string;
  title: string;
  activeClassName: string;
}
const NavItem = (props: NavItemProps) => {
  return (
    <div className="nav-item">
      <Link href={props.href}>
        <a className={props.activeClassName}>{props.title}</a>
      </Link>
    </div>
  );
};

export default Navigation;
