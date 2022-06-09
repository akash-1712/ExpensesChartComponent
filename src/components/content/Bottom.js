import { Fragment } from "react";
import styles from "./_bottom.module.scss";

const Bottom = () => {
  return (
    <Fragment>
      <div className={styles.bottom_chart}>
        <h1>Spending - Last 7 days</h1>
        <div>Akash</div>
      </div>
      <div className={styles.bottom_exp}>
        <div className={styles.bottom_exp_left}>
          <p>Total this month</p>
          <h1>$478.33</h1>
        </div>
        <div className={styles.bottom_exp_right}>
          <h4 className={styles.rate}>+2.4%</h4>
          <p>from last month</p>
        </div>
      </div>
    </Fragment>
  );
};
export default Bottom;
