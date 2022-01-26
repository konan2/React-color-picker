import React from "react"
import {hexToRgb} from "../../utilities/hexToRgb"
import {rgbToHex} from "../../utilities/rgbToHex"


function ColorConfigurator(props){
    let convertedToRgbColor = hexToRgb(props.color);

    const handleChange = event => {
        props.onChange(rgbToHex(convertedToRgbColor[0], convertedToRgbColor[1], convertedToRgbColor[2]))
    };

    return (
        <div className="color-configurator">
            <div className="flex-row">
                <label>R</label>
                <input name="red"   step="1" value={convertedToRgbColor[0]} onChange={handleChange} type="range" min="0" max="255" />
            </div>
            <div className="flex-row">
                <label>G</label>
                <input name="green" step="1" value={convertedToRgbColor[1]} onChange={handleChange} type="range" min="0" max="255" />
            </div>
            <div className="flex-row">
                <label>B</label>
                <input name="blue"  step="1" value={convertedToRgbColor[2]} onChange={handleChange} type="range" min="0" max="255" />   
            </div>
            
        </div>     
    )
}

export default ColorConfigurator