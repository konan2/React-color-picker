import React from "react"
import {rgbToHex} from "../../utilities/rgbToHex"

function ColorConfigurator(props){

    const handleChangeRed = (event)=>{ 
        props.onChange(
                            [parseInt(event.target.value, 10), props.value[1], props.value[2]])
        
    }

    const handleChangeGreen = (event)=>{
        props.onChange(
                            [props.value[0], parseInt(event.target.value, 10),props.value[2]])
        
    }

    const handleChangeBlue = (event)=>{
        props.onChange(
                            [props.value[0], props.value[1], parseInt(event.target.value, 10)])
        
    }

    return (
        <div className="color-configurator">
            <div className="flex-row">
                <label>R</label>
                <input name="red"   step="1" value={props.value[0]} onChange={handleChangeRed} type="range" min="0" max="255" />
            </div>
            <div className="flex-row">
                <label>G</label>
                <input name="green" step="1" value={props.value[1]} onChange={handleChangeGreen} type="range" min="0" max="255" />
            </div>
            <div className="flex-row">
                <label>B</label>
                <input name="blue"  step="1" value={props.value[2]} onChange={handleChangeBlue} type="range" min="0" max="255" />   
            </div>
        </div>     
    )
}

export default ColorConfigurator