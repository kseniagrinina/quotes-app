import classes from "./Layout.module.css";

import React from "react";
import MainNav from "./MainNav";

const Layout = ({ children }) => {
  return (
    <>
      <MainNav />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Layout;
