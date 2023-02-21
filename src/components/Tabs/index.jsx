import React, { useEffect, useState } from 'react'
import Style from './style'

const Tabs = ({ tab1Title, tab1, tab2, tab2Title }) => {
    const [activeTap, setActiveTap] = useState(0);

    return (
        <Style>
            <div className="tabs_toggle">
                <div className={`tab_btn ${activeTap === 0 ? "active" : ""}`} onClick={() => { setActiveTap(0) }}>{tab1Title}</div>
                <div className={`tab_btn ${activeTap === 1 ? "active" : ""}`} onClick={() => { setActiveTap(1) }}>{tab2Title}</div>
            </div>
            <div className="active_tap">
                {activeTap === 0 && tab1}
                {activeTap === 1 && tab2}
            </div>
        </Style>
    )
}

export default Tabs