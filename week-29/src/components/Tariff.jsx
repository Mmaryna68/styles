import React from "react";
import styles from "../style/Tariff.module.css";

const Tariff = ({ tariff }) => {
  return (
    <div className={`${styles.tariff} ${styles[tariff.background]}`}>
      <div className={`${styles.name}`}>{tariff.name}</div>
      <div className={styles.priceContainer}>
        <div className={`${styles.price}`}>${tariff.price}</div>
        <div className={styles.currency}>/мес</div>
      </div>
      <div className={`${styles.speed}`}>{tariff.speed}</div>
      <div className={`${styles.description}`}>{tariff.description}</div>
    </div>
  );
};

export default Tariff;
