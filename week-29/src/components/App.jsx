import "../style/App.css";
import React from "react";
import TariffContainer from "./TariffContainer";

const App = () => {
  const tariffs = [
    {
      name: "Безлимитный 30",
      price: 30,
      speed: "до 10 Мбит/сек",
      description: "Обьем включенного трафика не ограничен",
      unlimitedTraffic: true,
      background: "blue",
    },
    {
      name: "Безлимитный 45",
      price: 45,
      speed: "до 50 Мбит/сек",
      description: "Обьем включенного трафика не ограничен",
      unlimitedTraffic: true,
      background: "green",
    },
    {
      name: "Безлимитный 55",
      price: 55,
      speed: "до 100 Мбит/сек",
      description: "Обьем включенного трафика не ограничен",
      unlimitedTraffic: true,
      background: "red",
    },
    {
      name: "Безлимитный 100",
      price: 100,
      speed: "до 200 Мбит/сек",
      description: "Обьем включенного трафика не ограничен",
      unlimitedTraffic: true,
      background: "black",
    },
  ];

  return <TariffContainer tariffs={tariffs} />;
};

export default App;
