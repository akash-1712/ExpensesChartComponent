import { useState } from "react";
import styles from "./_chart.module.scss";

const Chart = (props) => {
  const [visible, setIsVisible] = useState("");
  const [changeColor, setChangeColor] = useState("");

  const leaveHandler = (id) => {
    setIsVisible("");
    setChangeColor("");
  };
  const enterHandler = (id) => {
    setIsVisible(id);
    setChangeColor(id);
  };

  return (
    <div className={styles.chart}>
      {props.barData.map((chart) => {
        return (
          <div key={chart.day} className={styles.chart_bar}>
            <div
              className={`${styles.chart_spent} ${
                visible === chart.day ? "" : styles.hidden
              }`}
              id={chart.day}
            >{`$${chart.spent}`}</div>
            <span
              //   onMouseEnter={hoverHandler.bind(null, chart.day)}
              onMouseLeave={leaveHandler.bind(null, chart.day)}
              onMouseEnter={enterHandler.bind(null, chart.day)}
              className={`${
                changeColor === chart.day ? styles.light : styles.darken
              }`}
              style={{
                height: `${(chart.spent / props.total) * 100}%`,
                backgroundColor: `${
                  chart.day === "wed" ? "hsl(186, 34%, 60%)" : ""
                }`,
              }}
            ></span>
            <p>{chart.day}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
