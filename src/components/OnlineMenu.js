import React from 'react';
import data from './data';
import MenuItem from './MenuItem';


const OnlineMenu = ({onAddtoOrder}) => {


    const renderMenuItems = () => data.map( 
        burger =>  <MenuItem 
                key={burger.name} 
                onAddtoOrder={onAddtoOrder} 
                burger={burger}
                />
    )

    return (
        <div className="onlineMenu">
            <div>
                ONLINE ORDER BURGER SPECIALS
            </div>
            <div>
                {renderMenuItems()}
            </div>
        </div>
    )
}

export default OnlineMenu;