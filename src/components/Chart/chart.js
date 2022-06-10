import { useState } from "react";
import styles from "./_chart.module.scss";

const Chart = (props) => {
  const [changeHandler, setChangeHandler] = useState("");

  const leaveHandler = (id) => {
    setChangeHandler("");
  };
  const enterHandler = (id) => {
    setChangeHandler(id);
  };

  return (
    <div className={styles.chart}>
      {props.barData.map((chart) => {
        return (
          <div key={chart.day} className={styles.chart_bar}>
            <div
              className={`${styles.chart_spent} ${
                changeHandler === chart.day ? "" : styles.hidden
              }`}
              id={chart.day}
            >{`$${chart.spent}`}</div>
            <span
              onMouseLeave={leaveHandler.bind(null, chart.day)}
              onMouseEnter={enterHandler.bind(null, chart.day)}
              className={`${
                changeHandler === chart.day ? styles.light : styles.darken
              }`}
              style={{
                height: `${(chart.spent / props.total) * 100}%`,
                backgroundColor: `${
                  chart.day === "wed" ? "hsl(186, 34%, 60%)" : ""
                }`,
              }}
            ></span>
            <p role={chart.day}>{chart.day}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
