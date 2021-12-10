import React, { Component } from "react";
import styles from "./Quote.module.css";

export default class Quote extends Component {
  render() {
    return (
      <div className={styles.Quote}>
        <h1>The dark is afraid of Chuck Norris.</h1>
      </div>
    );
  }
}
