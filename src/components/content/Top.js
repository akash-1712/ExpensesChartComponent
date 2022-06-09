import { Fragment } from "react";
import styles from "./_top.module.scss";
import logo from "../../images/logo.svg";

const Top = () => {
  return (
    <Fragment>
      <div className={styles.top_left}>
        <p>My Balance</p>
        <h3>$921.48</h3>
      </div>
      <div className={styles.top_right}>
        <img src={logo} alt="expensive-logo" />
      </div>
    </Fragment>
  );
};

export default Top;
