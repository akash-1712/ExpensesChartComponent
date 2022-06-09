import { Fragment } from "react";
import Chart from "../Chart/chart";
import styles from "./_bottom.module.scss";

const data = [
  { day: "mon", spent: 15.01 },
  { day: "tue", spent: 35.05 },
  { day: "wed", spent: 52.36 },
  { day: "thu", spent: 31.07 },
  { day: "fri", spent: 27.32 },
  { day: "sat", spent: 40.32 },
  { day: "sun", spent: 31.01 },
];

const Bottom = () => {
  return (
    <Fragment>
      <div className={styles.bottom_chart}>
        <h1>Spending - Last 7 days</h1>
        <Chart barData={data} total="75"></Chart>
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
