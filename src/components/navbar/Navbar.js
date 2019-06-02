import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = ({ links, match }) => {
  return (
    <>
      <ul>
        {links &&
          links.map(({ path, linkName }, index) => {
            return (
              <li key={index}>
                {(path && <NavLink to={path}>{linkName}</NavLink>) || linkName}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default withRouter(Navbar);
