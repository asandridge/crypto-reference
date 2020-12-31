import React, { useState } from 'react'
import styles from './App.module.css'
import ChartSelection from './components/ChartSelection/ChartSelection'
import CoinSelection from './components/CoinSelection/CoinSelection'
import TimeframeSelection from './components/TimeframeSelection/TimeframeSelection'
import Chart from './components/Chart/Chart'

function App() {

  const [chartType, setChartType] = useState("0");
  const [coinType, setCoinType] = useState("0");
  const [comparedCoinType, setComparedCoinType] = useState("1");
  const [timeframeType, setTimeframeType] = useState("0");

  const onChartSelection = (newChartType) => {
    setChartType(newChartType);
  }

  const onCoinSelection = (newCoinType) => {
    setCoinType(newCoinType);
  }

  const onComparedCoinSelection = (newComparedCoinType) => {
    setComparedCoinType(newComparedCoinType);
  }

  const onTimeframeSelection = (newTimeframeType) => {
    setTimeframeType(newTimeframeType);
  }

  return (
    <div className={styles.container}>

      <h1>CryptoReference</h1>

      <ChartSelection chartType={chartType} onChartSelection={onChartSelection} />

      <div style={{display: "flex", alignItems: "center"}}>
        <CoinSelection coinType={coinType} comparedCoinType={comparedCoinType} onCoinSelection={onCoinSelection} onComparedCoinSelection={onComparedCoinSelection} chartType={chartType} />
        <Chart chartType={chartType} coinType={coinType} comparedCoinType={comparedCoinType} timeframeType={timeframeType} />
      </div>

      <TimeframeSelection timeframeType={timeframeType} onTimeframeSelection={onTimeframeSelection} />
    </div>
  );
}

export default App;
