import React ,{useState} from "react"
import Component from "./Component"
import {colorsArr} from "./../../data"

function ColorPicker(){

    const [data, setColor] = useState({
        currentColor: colorsArr[0].code,
        colors: colorsArr,
      });

    const handleChange = value => {
        setColor({
            ...data,
            currentColor: value
          });
    };

    return(
        <Component
            value={data.currentColor} 
            onChange={handleChange} 
            colors={data.colors} 
        />
    )
}

export default ColorPicker