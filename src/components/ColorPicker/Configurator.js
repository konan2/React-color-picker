import React from "react"

function ColorConfigurator(props){
    const handleChange = event => {
        props.onChange(
           {...props.value,
            [event.target.name]: parseInt(event.target.value, 10)
           }
        )
      }


    return (
        <div className="color-configurator">
            <div className="flex-row">
                <label>R</label>
                <input name="red"   step="1" value={props.value.red} onChange={handleChange} type="range" min="0" max="255" />
            </div>
            <div className="flex-row">
                <label>G</label>
                <input name="green" step="1" value={props.value.green} onChange={handleChange} type="range" min="0" max="255" />
            </div>
            <div className="flex-row">
                <label>B</label>
                <input name="blue"  step="1" value={props.value.blue} onChange={handleChange} type="range" min="0" max="255" />   
            </div>
        </div>     
    )
}

export default ColorConfigurator