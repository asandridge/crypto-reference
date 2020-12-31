import React, { useState, useEffect } from "react"
import { fetchCoinHistory } from "../../api"
import { Line } from "react-chartjs-2"
import { transformTimeframe, transformLogrithmic, transformComparitive } from "./services/DataService"
import { currencyMap } from '../../constants'


const Chart = (props) => {
    const [coinHistory, setCoinHistory] = useState([])
    const [coinHistoryCompared, setCoinHistoryCompared] = useState([])
    const [chartData, setChartData] = useState([])
    
    useEffect(() => {
        const fetchAPI = async () => {
            const historyData = await fetchCoinHistory(props.coinType);
            setCoinHistory(historyData);
        }
        fetchAPI();
    }, [props.coinType])

    useEffect(() => {
        const fetchAPI = async () => {
            const historyData = await fetchCoinHistory(props.comparedCoinType);
            setCoinHistoryCompared(historyData);
        }
        fetchAPI();
    }, [props.comparedCoinType])

    useEffect(() => {

        const coinHistoryClone = coinHistory.map(element => ({...element}));
        let processedData = transformTimeframe(coinHistoryClone, props.timeframeType);

        switch (props.chartType) {
            case "1":
                const coinHistoryComparedClone = coinHistoryCompared.map(element => ({...element}));
                let processedDataCompared = transformTimeframe(coinHistoryComparedClone, props.timeframeType);
                processedData = transformComparitive(processedData, processedDataCompared)
                break;
            case "2":
                processedData = transformLogrithmic(processedData.slice());
                //render other data for log
                break;
            default:
                break;
        }

        setChartData(processedData);

    }, [coinHistory, coinHistoryCompared, props.chartType, props.coinType, props.comparedCoinType, props.timeframeType])


    const yAxisLabel = props.chartType === "0" ? "Price" : (props.chartType === "1" ? `${currencyMap[props.coinType]} vs. ${currencyMap[props.comparedCoinType]}` : 'log(Price)')

    const lineChart = (
        chartData.length ? (
            <Line
                height="600%"
                width="1200%"
                data={{
                    labels: chartData.map((data) => data.timestamp.split("T00:00:00Z")[0]),
                    datasets: [{
                        data: chartData.map((data) => Number.parseFloat(data.rate).toFixed(2)),
                        label: yAxisLabel,
                        borderColor: "#00ff99"
                    }]
                }}
            />
        ) : <h2>Loading...</h2>
    )

    return (
        <div>{lineChart}</div>
    )
}

export default Chart