import React from 'react'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

const TimeframeSelection = (props) => {

    const handleChange = (timeframeType) => {
        props.onTimeframeSelection(timeframeType.target.value)
    }

    return (
        <>
            <FormControl component="fieldset">
            <RadioGroup value={props.timeframeType} onChange={(e) => handleChange(e)}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <FormControlLabel value="0" control={<Radio color='primary' />} label="1W" />
                    <FormControlLabel value="1" control={<Radio color='primary' />} label="1M" />
                    <FormControlLabel value="2" control={<Radio color='primary' />} label="1Y" />
                    <FormControlLabel value="3" control={<Radio color='primary' />} label="5Y" />
                    <FormControlLabel value="4" control={<Radio color='primary' />} label="10Y" />
                </div>
            </RadioGroup>
            </FormControl>
        </>
    )
}

export default TimeframeSelection