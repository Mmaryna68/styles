import React, { useState } from "react";
import Tariff from "./Tariff";
import styles from "../style/TariffContainer.module.css";

const TariffContainer = ({ tariffs }) => {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const handleTariffSelect = (tariff) => {
    setSelectedTariff((prevSelectedTariff) =>
      prevSelectedTariff === tariff ? null : tariff
    );
  };
  return (
    <div className={styles.tariffContainer}>
      {tariffs.map((tariff, index) => (
        <Tariff
          key={index}
          tariff={tariff}
          isSelected={tariff === selectedTariff}
          onSelect={handleTariffSelect}
        />
      ))}
      {selectedTariff && (
        <div className="selected-tariff-message">
          Выбран тариф: {selectedTariff.name} (${selectedTariff.price}/мес)
        </div>
      )}
    </div>
  );
};

export default TariffContainer;
