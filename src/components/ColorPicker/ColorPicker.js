import React, {useRef} from 'react';
import DropDown from "../DropDown"
import Menu from "../Menu"
import Configurator from "./Configurator"
import {rgbToHex} from "../../utilities/rgbToHex"

function ColorPicker(props) {
    let prevColor = useRef(props.value)
    const hexColor = rgbToHex(props.value.red, props.value.green, props.value.blue)

    let apply = () =>  {
        prevColor.current = props.value
    }

    return (
        <color-picker>
            <output>{hexColor}</output>
            <span className="divider"></span>
            <DropDown
                onClose={()=> {props.onChange(prevColor.current)}}
                onApply={apply}
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


