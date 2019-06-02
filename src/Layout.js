import React from "react";
import Navbar from "./components/navbar/Navbar";

const links = [
  { path: "/", linkName: "Home" },
  { path: "/about", linkName: "About" }
];

class Layout extends React.Component {
  render() {
    return (
      <>
        <div className="headder">
          Headder
          <Navbar links={links} />
        </div>
        <div className="content">{this.props.children}</div>
        <div className={"footer"}> Footer </div>
      </>
    );
  }
}

export default Layout;
