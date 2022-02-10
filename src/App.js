import './App.css';
import React ,{useState} from "react"
import ColorPicker from "./components/ColorPicker/ColorPicker"
import {colorsArr} from "./data"
import {hexToRgb} from "./utilities/hexToRgb"
import {rgbToHex} from "./utilities/rgbToHex"


function App() {
    const [value, setValue] = useState(hexToRgb(colorsArr[0].code))   
    
    return (
        <div>
            <ColorPicker 
                value={value} 
                onChange={setValue} 
                colors={colorsArr} 
            />
           <output>{rgbToHex(value.red, value.green, value.blue)}</output>
        </div>
    )
}

export default App

