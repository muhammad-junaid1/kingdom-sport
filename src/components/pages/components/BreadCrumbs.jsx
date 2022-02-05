import React from "react";

const styles = {
    breadCrumbs: {
        display: "flex",
        alignItems: "center",
        fontSize: "1.4rem"
    },
    span: {
        margin: "0 1.8rem"
    }
}

const BreadCrumbs = ({ items }) => {
  return (
    <>
      <div className="bread-crumbs" style={styles.breadCrumbs}>
        {items.map((item, index) => {
          return (
            <>
              <li style={{color: items.length-1 === index ? "#743EE8" : ""}}>{item}</li> {index < items.length-1 && <span style={styles.span}>/</span>}
            </>
          );
        })}
      </div>
    </>
  );
};

export default BreadCrumbs;
