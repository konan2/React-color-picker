import React from 'react';
  
function Menu(props) {
    console.log()

    const MenuItems = props.data.map((item, index) => 
        <div className={"menu-item " + (item.code === props.color ? 'current-menu-item' : '')} 
             onClick={() => props.onChange(item.code)} 
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