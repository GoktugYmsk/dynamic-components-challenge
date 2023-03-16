import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Popup from "./popup";

function Language({handleOpenPopup,setShowPopup,showPopup}) {
    const [languages, setLanguages] = useState([]);
    const popupRef = useRef(null);

    useEffect(() => {
        async function fetchLanguages() {
            try {
                const response = await axios.get("https://restcountries.com/v2/all");
                setLanguages(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchLanguages();
    }, []);

    useEffect(() => {
        const handleClickOutsidePopup = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setShowPopup(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutsidePopup);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsidePopup);
        };
    }, []);
    
    languages.sort((a, b) => a.languages[0].name.localeCompare(b.languages[0].name));
    return (
        <div>
            <ul ref={popupRef}>
                {showPopup && (
                    <Popup setShow={handleOpenPopup} languages={languages} />
                )}
            </ul>
        </div>
    );
}

export default Language;
