import React from 'react'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

const ChartSelection = (props) => {

    const handleChange = (chartType) => {
        props.onChartSelection(chartType.target.value)
    }

    return (
        <>
            <FormControl component="fieldset">
            <RadioGroup value={props.chartType} onChange={(e) => handleChange(e)}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <FormControlLabel value="0" control={<Radio color='primary' />} label="Historical" />
                    <FormControlLabel value="1" control={<Radio color='primary' />} label="Comparison" />
                    <FormControlLabel value="2" control={<Radio color='primary' />} label="Logarithmic" />
                </div>
            </RadioGroup>
            </FormControl>
        </>
    )
}

export default ChartSelection