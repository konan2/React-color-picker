import React from 'react';
import {hexToRgb} from "../utilities/hexToRgb"
  
function Menu(props) {
    const MenuItems = props.data.map((item, index) => 
        <div className={"menu-item " + (item.code === props.value ? 'current-menu-item' : '')} 
             onClick={() => props.onChange(hexToRgb(item.code))} 
             key={index}
             >
            <span>{item.title}</span>
            <span className="color-preview" style={{background: item.code}}></span>
        </div>)

    return (
        <div className="menu">
            {MenuItems}
        </div>
    )    
}

export default Menu