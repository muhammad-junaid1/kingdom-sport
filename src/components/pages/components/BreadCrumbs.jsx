import React, { useContext } from "react";
import { ContentRoutesContext } from "../../Main";

const styles = {
  breadCrumbs: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    fontWeight: 500,
  },
  li: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
};

const BreadCrumbs = ({ items }) => {
  const { isMobile } = useContext(ContentRoutesContext);
  return (
    <>
      <div className="bread-crumbs" style={styles.breadCrumbs}>
        {items.map((item, index) => {
          return (
            <>
              <li
                style={{ color: items.length - 1 === index ? "#743EE8" : "" , ...styles.li}}
              >
                {item}
              </li>{" "}
              {index < items.length - 1 && (
                <span style={{ margin: isMobile ? "0 10px" : "0 1.8rem" }}>
                  /
                </span>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default BreadCrumbs;
