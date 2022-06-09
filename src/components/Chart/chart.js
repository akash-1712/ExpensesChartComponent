import styles from "./_chart.module.scss";

const Chart = (props) => {
  const leaveHandler = (event) => {
    const spent = event.target.previousElementSibling;
    spent.style.visibility = "hidden";
    event.target.style.backgroundColor = "hsl(10, 79%, 55%)";
    event.target.style.backgroundColor = `${
      spent.id === "wed" ? "hsl(186, 34%, 60%)" : ""
    }`;
  };
  const enterHandler = (event) => {
    const spent = event.target.previousElementSibling;
    spent.style.visibility = "visible";
    // event.target.style.backgroundColor = "hsl(10, 79%, 65%)";
    event.target.style.backgroundColor = `${
      spent.id === "wed" ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
    }`;
  };

  return (
    <div className={styles.chart}>
      {props.barData.map((chart) => {
        return (
          <div key={chart.day} className={styles.chart_bar}>
            <div
              className={styles.chart_spent}
              id={chart.day}
            >{`$${chart.spent}`}</div>
            <span
              //   onMouseEnter={hoverHandler.bind(null, chart.day)}
              onMouseLeave={leaveHandler}
              onMouseEnter={enterHandler}
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
