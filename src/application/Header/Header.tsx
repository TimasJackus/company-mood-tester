import { useMemo } from "react";
import { HeaderWrapper } from "../../ui/HeaderWrapper";
import { Nav } from "../../ui/Nav";
import { NavItem } from "../../ui/NavItem";
import { NavLink } from "../../ui/NavLink";
import { NotificationIcon } from "../../ui/NotificationIcon";
import { UserMenuIcon } from "../../ui/UserMenuIcon";
import { UserMenuWrapper } from "../../ui/UserMenuWrapper";
import { UserWrapper } from "../../ui/UserWrapper";
import { ILink } from "./Header.types";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";

const Header: React.FC = () => {
  const links = useMemo(
    () =>
      [
        {
          to: "/",
          children: <HomeIcon />,
          exact: true,
        },
        {
          to: "/timetable",
          children: "Time",
        },
        {
          to: "/hr-admin-moods",
          children: "Result",
        },
      ] as ILink[],
    []
  );

  return (
    <HeaderWrapper>
      <UserWrapper>
        <UserMenuWrapper>
          <NotificationIcon />
          <UserMenuIcon>Karolis</UserMenuIcon>
        </UserMenuWrapper>
      </UserWrapper>
      <Nav>
        {links.map((link) => (
          <NavItem>
            <NavLink {...link} />
          </NavItem>
        ))}
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
