import React from 'react'
import { Select, MenuItem } from '@material-ui/core';

const CoinSelection = (props) => {

    const handleCoinChange = (coinType) => {
        props.onCoinSelection(coinType.target.value)
    }

    const handleComparedCoinChange = (comparedCoinType) => {
        props.onComparedCoinSelection(comparedCoinType.target.value)
    }

    let comparedCoinSelect;
    if (props.chartType === "1") {
        comparedCoinSelect =
        <>
            <br />
            <div>vs.</div>
            <br />
            <div style={{height: "30px"}}>
                <Select id="coinSelection" value={props.comparedCoinType} style={{color: '#00ff99'}} onChange={(e) => handleComparedCoinChange(e)}>
                    <MenuItem value="0">Bitcoin</MenuItem>
                    <MenuItem value="1">Ethereum</MenuItem>
                    <MenuItem value="2">Litecoin</MenuItem>
                </Select>
            </div>
        </>
    } else {
        comparedCoinSelect = <></>
    }

    return (
        <div>
            <div style={{height: "30px"}}>
                <Select id="coinSelection" value={props.coinType} style={{color: '#00ff99'}} onChange={(e) => handleCoinChange(e)}>
                    <MenuItem value="0">Bitcoin</MenuItem>
                    <MenuItem value="1">Ethereum</MenuItem>
                    <MenuItem value="2">Litecoin</MenuItem>
                </Select>
            </div>
            {comparedCoinSelect}
        </div>
    )
}

export default CoinSelection