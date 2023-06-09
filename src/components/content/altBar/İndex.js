import React from 'react';

import { AiOutlinePicture } from 'react-icons/ai';

function AltBar({ setInputActive, openPopup, i, isLeftInputActive, isRightInputActive }) {

    const handleChange = (event) => {
        const inputValue = event.target.value;
        console.log(inputValue);
    };

    return (
        <div className="altBar">
            <input
                className="leftInput"
                onClick={() => setInputActive(i * 2, true)}
                onBlur={() => setInputActive(i * 2, false)}
                onChange={handleChange}
            />
            <hr className={`lefthr ${isLeftInputActive ? 'hrColor' : ''}`} />
            <p className="term">TERİM</p>
            <hr className={`righthr ${isRightInputActive ? 'hrColor' : ''}`} />
            <p className="description">TANIM</p>
            <p onClick={openPopup} className="languageLeft">
                Dil seç
            </p>
            <p onClick={openPopup} className="languageRight">
                Dil seç
            </p>
            <input
                className="rightInput"
                onChange={handleChange}
                onClick={() => setInputActive(i * 2 + 1, true)}
                onBlur={() => setInputActive(i * 2 + 1, false)}
            />
            <div className="picturePart">
                <AiOutlinePicture className="pictureIcon" />
                <p>Resim</p>
            </div>
        </div>
    );
}

export default AltBar;
