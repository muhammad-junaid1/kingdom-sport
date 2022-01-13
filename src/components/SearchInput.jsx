import React, {useState} from 'react';
import "../css/SearchInput.css";
import SVGIcons from "./SvgIcons";

const SearchInput = ({collapse, setCollapse}) => {
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState("");
    const handleFocus = () => {
        if(!collapse) {
            setFocus(true);
        }
    }
    const handleBlur = () => setFocus(false);
    const handleClick = () => {
        if(collapse) setCollapse(false);
    }
    const handleInput = (e) => {
        setValue(e.target.value);
    }
    return (
        <>
        <div className={`input-wrapper${focus ? " input--focused" : ""}${collapse ? " input--collapsed" : ""}`} onClick={handleClick}>
            <input disabled={collapse ? true : false} className="search-input" type="text" onInput={handleInput} placeholder={`${collapse ? "" : "Search"}`} onFocus={handleFocus} onBlur={handleBlur} value={collapse ? "" : value}/>
            <SVGIcons.Search/>
            {focus && <p className="typing-text">Typing <span>|</span></p>}
        </div>
        </>
    );
};


export default SearchInput;