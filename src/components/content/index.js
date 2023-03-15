import React from 'react'

function Content({count,openPopup}) {
    return (
        <>
            {Array.from({ length: count }, (_, i) => (
                <div className="container" key={`container-${i}`}>
                    <div className="ustBar">
                        <p className='containerNumber' >{i + 1}</p>
                        <hr className="usthr" />
                    </div>
                    <div className="altBar">
                        <input className="leftInput" placeholder="yaz" />
                        <hr className="lefthr" />
                        <p className="term">TERİM</p>
                        <hr className="righthr" />
                        <p className="description">TANIM</p>
                        <p onClick={openPopup} className="languageLeft">
                            Dil seç
                        </p>
                        <p onClick={openPopup} className="languageRight">
                            Dil seç
                        </p>
                        <input className="rightInput" placeholder="yaz" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default Content
