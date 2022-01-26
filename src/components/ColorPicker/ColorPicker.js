import React from 'react';
import DropDown from "../DropDown"
import Menu from "../Menu"
import Configurator from "./Configurator"
import {rgbToHex} from "../../utilities/rgbToHex"

function ColorPicker(props) {
    const hexColor = rgbToHex(props.value[0], props.value[1], props.value[2])
    return (
        <color-picker>
            <output>{hexColor}</output>
            <span className="divider"></span>
            <DropDown
                onClose={() => props.onChange(props.value)} 
                controls={true}
                content={
                    <Configurator 
                        onChange={props.onChange} 
                        value={props.value} 
            />}>
                <span className="color-preview" style={{background: hexColor}}></span>
            </DropDown>
            <span className="divider"></span>
            <DropDown 
                content={<Menu onChange={props.onChange}
                data={props.colors}
                value={hexColor}  
            />}>
                <span className="arrow-down"></span>
            </DropDown>
        </color-picker>
    )
}

export default ColorPicker


