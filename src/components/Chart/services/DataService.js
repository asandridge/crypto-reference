export const transformTimeframe = (coinData, timeframe) => {
    if (timeframe === "0") { // 1 week
        let processed = coinData.slice(Math.max(0, coinData.length - 7))
        return setMonthDay(processed);
    } else if (timeframe === "1") { // 1 month
        let processed = coinData.slice(Math.max(0, coinData.length - 30))
        return setMonthDay(processed);
    } else if (timeframe === "2") { // 1 year
        let processed = coinData.slice(Math.max(0, coinData.length - 365))
        processed = filterMonthly(processed);
        return setMonthDay(processed)
    } else if (timeframe === "3") { // 5 years
        let processed = coinData.slice(Math.max(0, coinData.length - (365 * 5)))
        processed = filterMonthly(processed);
        return setMonthYear(processed)
    } else if (timeframe === "4") { // 10 years
        let processed = coinData.slice(Math.max(0, coinData.length - (365 * 10)))
        processed = filterMonthly(processed);
        return setMonthYear(processed)
    }
}

export const transformLogrithmic = (coinData) => {
    coinData.forEach((element) => {
        element.rate = Math.log(element.rate)
    })
    return coinData
}

export const transformComparitive = (coinData, coinDataCompared) => {
    let processedData = []
    coinData.forEach((element, index) => {
        if (index < coinDataCompared.length) {
            let dataPoint = {rate: element.rate / coinDataCompared[index].rate, timestamp: element.timestamp }
            processedData.push(dataPoint)
        }
    })
    return processedData
}

const setMonthDay = (data) => {
    /*data.forEach((element) => {
        let month = element.timestamp.slice(5, 7)
        let day = element.timestamp.slice(8, 10)
        element.timestamp = `${month}-${day}`

        // let dayMonth = element.timestamp.match(/[0-9]{2}-[0-9]{2}T/)
        // if (dayMonth) {
        //     element.timestamp = dayMonth[0].slice(0, -1)
        // }
    })*/
    return data
}

const setMonthYear = (data) => {
    /*data.forEach((element) => {
        let month = element.timestamp.slice(5, 7)
        let year = element.timestamp.slice(0, 4)
        element.timestamp = `${month}-${year}`

        // let monthYear = element.timestamp.match(/[0-9]{4}-[0-9]{2}/)
        // if (monthYear) {
        //     element.timestamp = monthYear[0]
        // }
    })*/
    return data
}

const filterMonthly = (data) => {
    return data.filter((element, index, arr) => {
        return element.timestamp.slice(8, 10) === "01" || index === arr.length - 1
    })
}