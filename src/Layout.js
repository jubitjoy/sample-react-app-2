import React from "react";
import { Link } from "react-router-dom";

class Layout extends React.Component {
  render() {
    return (
      <>
        <div className="headder">
          Headder
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="content">{this.props.children}</div>
        <div className={"footer"}> Footer </div>
      </>
    );
  }
}

export default Layout;
