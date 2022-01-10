import React, {useState} from 'react';
import "../css/SearchInput.css";
import SVGIcons from "./SvgIcons";

const SearchInput = () => {
    const [focus, setFocus] = useState(false);
    const handleFocus = () => setFocus(true);
    const handleBlur = () => setFocus(false);
    return (
        <>
        <div className={`input-wrapper ${focus ? "input--focused" : ""}`}>
            <input className="search-input" type="text" placeholder="Search" onFocus={handleFocus} onBlur={handleBlur}/>
            <SVGIcons.Search/>
            {focus && <p className="typing-text">Typing <span>|</span></p>}
        </div>
        </>
    );
};


export default SearchInput;