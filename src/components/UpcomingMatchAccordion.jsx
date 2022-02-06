import React, {useState} from 'react';
import "../css/UpcomingMatchAccordion.css";

const UpcomingMatchAccordion = ({title, items, halfWidth}) => {
    const [toggle, setToggle] = useState(true);
    return (
        <>
            <div className="accordion" style={{width: halfWidth ? "49%" : "100%"}}>
                <div className="accordion__header">
                    <p>{title}</p>
                    <span onClick={() => setToggle(!toggle)}>{toggle ? "See less" : "See more"}</span>
                </div>
                {toggle &&
                <div className="accordion__body">
                    {items.map((item) => {
                        return <div className="accordion__item" style={{width: halfWidth ? "49%" : "32.5%"}}>
                        <p>{item.text}</p>
                        <span>{item.numbers}</span>
                    </div>
                    })}
                </div>
                }
            </div>
        </>
    );
};


export default UpcomingMatchAccordion;