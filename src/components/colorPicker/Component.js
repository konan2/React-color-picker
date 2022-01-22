import React from 'react';
import DropDown from "./../DropDown"
import Menu from "./../Menu"
import Configurator from "./Configurator"

function Component(props) {
    return (
        <color-picker>
            <output>{props.value}</output>
            <span className="divider"></span>
            <DropDown
                onClose={() => props.onChange(props.value)} 
                controls={true}
                content={
                    <Configurator 
                        onChange={props.onChange} 
                        color={props.value} 
            />}>
                <span className="color-preview" style={{background: props.value}}></span>
            </DropDown>
            <span className="divider"></span>
            <DropDown 
                content={<Menu onChange={props.onChange}
                data={props.colors}
                color={props.value}  
            />}>
                <span className="arrow-down"></span>
            </DropDown>
        </color-picker>
    )
}

export default Component


