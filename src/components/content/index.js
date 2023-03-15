import React from 'react'

import { AiOutlinePicture } from 'react-icons/ai';

import './index.css'

function Content({ count, openPopup }) {
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
                        <div className='picturePart' >
                            <AiOutlinePicture className='pictureIcon' />
                            <p>Resim</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Content
