import React from "react";
import Tariff from "./Tariff";
import styles from "../style/TariffContainer.module.css";

const TariffContainer = ({ tariffs }) => {
  return (
    <div className={styles.tariffContainer}>
      {tariffs.map((tariff, index) => (
        <Tariff key={index} tariff={tariff} />
      ))}
    </div>
  );
};

export default TariffContainer;
