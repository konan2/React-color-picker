import React ,{useState} from "react"
import {hexToRgb} from "./../../utilities/hexToRgb"
import {rgbToHex} from "./../../utilities/rgbToHex"


function ColorConfigurator(props){
    let convertedToRgbColor = hexToRgb(props.color);

    const [currentColors, setColor] = useState({
        red: convertedToRgbColor[0],
        green: convertedToRgbColor[1],
        blue: convertedToRgbColor[2],
      });
    
      const handleChange = event => {
        setColor({
          ...currentColors,
          [event.target.name]: event.target.value,
        });
        props.onChange(rgbToHex(currentColors.red, currentColors.green, currentColors.blue))
      };

    return (
        <div className="color-configurator">
            <div className="flex-row">
                <label>R</label>
                <input name="red"   step="1" value={currentColors.red} onChange={handleChange} onInput={handleChange} type="range" min="0" max="255" />
            </div>
            <div className="flex-row">
                <label>G</label>
                <input name="green" step="1" value={currentColors.green} onChange={handleChange} onInput={handleChange} type="range" min="0" max="255" />
            </div>
            <div className="flex-row">
                <label>B</label>
                <input name="blue"  step="1" value={currentColors.blue} onChange={handleChange} onInput={handleChange} type="range" min="0" max="255" />   
            </div>
        </div>     
    )
}

export default ColorConfigurator