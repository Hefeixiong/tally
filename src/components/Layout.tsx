import React from "react";
import { NavBar } from "antd-mobile";
import Bottom from "components/Bottom";
import "../styles/layout.scss";

function Layout(props: any) {
  return (
    <div className="app">
      <div className="top">
        <NavBar backArrow={false}>{props.className}</NavBar>
      </div>
      <div className="body">{props.children}</div>
      <div className="bottom">
        <Bottom />
      </div>
    </div>
  );
}

export default Layout;
