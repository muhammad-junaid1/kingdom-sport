import SVGIcons from "./SvgIcons";

const NavbarItem = ({ Icon, text, number, isDropDown, showDropdown,setShowDropdown, isHome , isActive}) => {
    const handleClick = () => {
        setShowDropdown(!showDropdown);
    }
  return (
    <>
      <div className={`navbar__item ${isDropDown && "navbar__item--dropdown"} ${showDropdown && "active-navbar-item"} ${isActive && "active-navbar-item"}`} onClick={isDropDown ? handleClick : undefined}>
        <div className="left">
          <Icon />
          <p className="navbar__item-text">{text}</p>
        </div>
        <div className="right">
          {!isHome && <span className="navbar__item-number">{number}</span>}
          {isDropDown ? showDropdown ? <SVGIcons.ArrowUp/> : <SVGIcons.ArrowDown/> : undefined}
        </div>

        {/* Border left */}
        <div className="active-border" style={{display: isHome ? "block" : "none"}}>

        </div>
      </div>
    </>
  );
};

NavbarItem.defaultProps = {
  isDropDown: "true",
};

export default NavbarItem;
