import React from "react";
import styles from "./styles.module.scss";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <nav>About NavBar </nav>
      <main className={styles.about_us__root_container}>{children}</main>
    </React.Fragment>
  );
};

export default AboutLayout;
