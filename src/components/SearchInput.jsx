import React, {useState} from 'react';
import "../css/SearchInput.css";
import SVGIcons from "./SvgIcons";

const SearchInput = ({collapse, setCollapse, onInput, value}) => {
    const [focus, setFocus] = useState(false);
    const [inputVal, setInputVal] = useState("");
    const handleFocus = () => {
        if(!collapse) {
            setFocus(true);
        }
    }
    const handleBlur = () => setFocus(false);
    const handleClick = () => {
        if(collapse) setCollapse(false);
    }
    // const handleInput = (e) => {
    //     if(collapse) {
    //         setInputVal(e.target.value);
    //     } else {
    //         onInput();
    //     }
    // }
    return (
        <>
        <div className={`input-wrapper${focus ? " input--focused" : ""}`} onClick={handleClick}>
            <input disabled={collapse ? true : false} {...(value ? {value} : null)} className="search-input" type="text" onInput={onInput} placeholder={`${collapse ? "" : "Search"}`} onFocus={handleFocus} onBlur={handleBlur} value={collapse ? "" : (value ? value : inputVal)}/>
            <SVGIcons.Search/>
            {focus && <p className="typing-text">Typing <span>|</span></p>}
        </div>
        </>
    );
};


export default SearchInput;