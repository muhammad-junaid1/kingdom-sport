import React, {useState} from 'react';
import SVGIcons from "./SvgIcons";
import Button from './Button';

import "../css/Balance.css";

const Balance = ({id, numbers, avatarImg}) => {
    const [toggle, setToggle] = useState(false);

    // For demonstrating empty bets container (example)
    const handleClick = () => {
       setToggle(!toggle);
    }
    return (
        <div className="balance">
        <div className="balance-container" onClick={handleClick}>
                <div className="left">
                    <span>{id}</span>
                    <p><SVGIcons.EmptyWallet/> {numbers}</p>
                </div>
                <div className="right">
                    <img src={require(`../assets/${avatarImg}.png`)} alt="" />
                </div>
                </div>

                {/* Account information popup */}
                {toggle &&
                <div className="account-popup" style={{cursor: toggle ? "default" : ""}}>
                <div className="account__header">
                        <p>CONNECT WITH METAMASK</p>
                        <div className="user">
                            <img src={require(`../assets/${avatarImg}.png`)} alt="" />
                            <span>{id}</span>
                            <SVGIcons.Export/>
                            <SVGIcons.CopyBetID/>
                        </div>
                </div>
                <div className="account__body">
                    <p>YOUR BALANCE</p>
                    <div className="btns">
                            <Button type="primary" size="small" color="grey"><SVGIcons.EmptyWallet/> 676.00 BCR</Button>
                            <Button type="primary" size="small"><SVGIcons.SaveAdd/> Add money</Button>
                    </div>
                </div>
                <div className="account__footer">
                    <Button type="secondary" color="grey"><SVGIcons.ToggleOffCircle/> Disconnect</Button>
                </div>
                </div>
                }
        </div>
    );
};


export default Balance;