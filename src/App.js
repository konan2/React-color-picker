import './App.css';
import React ,{useState} from "react"
import ColorPicker from "./components/ColorPicker/ColorPicker"
import {colorsArr} from "./data"

function App() {
    const [data, setColor] = useState({
        currentColor: colorsArr[0].code
      });

    const handleChange = value => {
        setColor({
            ...data,
            currentColor: value
          });
    };

    return (
        <ColorPicker 
            value={data.currentColor} 
            onChange={handleChange} 
            colors={colorsArr} 
        />
    )
}

export default App

