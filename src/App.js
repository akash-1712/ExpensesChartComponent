import React, { Fragment } from "react";
import Card from "./components/card/Card";
import Bottom from "./components/content/Bottom";
import Top from "./components/content/Top";
import styles from "./_app.module.scss";

function App() {
  return (
    <Fragment>
      <Card className={styles.card_top}>
        <Top></Top>
      </Card>

      <Card className={styles.card_bottom}>
        <Bottom></Bottom>
      </Card>
    </Fragment>
  );
}

export default App;
