import './App.css';
import React ,{useState} from "react"
import ColorPicker from "./components/ColorPicker/ColorPicker"
import {colorsArr} from "./data"
import {hexToRgb} from "./utilities/hexToRgb"


function App() {
    const [currentColor, setCurrentColor] = useState(
        hexToRgb(colorsArr[0].code)
    )   
    
    return (
        <ColorPicker 
            value={currentColor} 
            onChange={setCurrentColor} 
            colors={colorsArr} 
        />
    )
}

export default App

