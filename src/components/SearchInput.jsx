import React, {useState} from 'react';
import "../css/SearchInput.css";
import SVGIcons from "./SvgIcons";

const SearchInput = ({collapse}) => {
    const [focus, setFocus] = useState(false);
    const handleFocus = () => {
        if(!collapse) {
            setFocus(true);
        }
    }
    const handleBlur = () => setFocus(false);
    return (
        <>
        <div className={`input-wrapper${focus ? " input--focused" : ""}${collapse ? " input--collapsed" : ""}`}>
            <input disabled={collapse ? true : false} className="search-input" type="text" placeholder={`${collapse ? "" : "Search"}`} onFocus={handleFocus} onBlur={handleBlur}/>
            <SVGIcons.Search/>
            {focus && <p className="typing-text">Typing <span>|</span></p>}
        </div>
        </>
    );
};


export default SearchInput;