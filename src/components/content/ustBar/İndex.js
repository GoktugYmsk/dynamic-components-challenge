import React from 'react'

function Ustbar({i}) {
    return (
        <div className="ustBar">
            <p className="containerNumber">{i + 1}</p>
            <hr className="usthr" />
        </div>
    )
}

export default Ustbar
