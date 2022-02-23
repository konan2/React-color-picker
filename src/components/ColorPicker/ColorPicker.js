import React, {useRef, useState, useEffect} from 'react';
import DropDown from "../DropDown"
import Menu from "../Menu"
import Configurator from "./Configurator"
import {rgbToHex} from "../../utilities/rgbToHex"

function ColorPicker(props) {
    const [currentColor, setCurrentColor] = useState(props.value) 
    //let prevColor = useRef(props.value)

    let setValue = (color) =>  {
        //setCurrentColor(color)
        //prevColor.current = color;
        props.onChange(color)
    }

    useEffect(() => {setCurrentColor(props.value)}, [props.value])
   

    return (
        <color-picker>
            <output>{rgbToHex(currentColor.red, currentColor.green, currentColor.blue)}</output> 
            <span className="divider"></span>
            <DropDown
                onClose={()=> {setCurrentColor(props.value)}}
                onApply={()=> {setValue(currentColor)}}
                controls={true}
                content={
                    <Configurator 
                        onChange={setCurrentColor} 
                        value={currentColor} 
            />}>
                <span className="color-preview" style={{background: rgbToHex(currentColor.red, currentColor.green, currentColor.blue)}}></span>
            </DropDown>
            <span className="divider"></span>
            <DropDown 
                content={<Menu onChange={setValue}
                data={props.colors} 
                value={rgbToHex(currentColor.red, currentColor.green, currentColor.blue)}
            />}>
                <span className="arrow-down"></span>
            </DropDown>
        </color-picker>
    )
}

export default ColorPicker


