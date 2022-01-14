import React from "react";

const NAV_ICONS_COLOR = "#636366";

const Home = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : NAV_ICONS_COLOR }}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.0302 5.11477L10.7102 2.09227C9.53267 1.26727 7.72518 1.31227 6.59268 2.18977L2.83518 5.12227C2.08518 5.70727 1.49268 6.90727 1.49268 7.85227V13.0273C1.49268 14.9398 3.04518 16.4998 4.95768 16.4998H13.0427C14.9552 16.4998 16.5077 14.9473 16.5077 13.0348V7.94977C16.5077 6.93727 15.8552 5.69227 15.0302 5.11477ZM9.56268 13.4998C9.56268 13.8073 9.30768 14.0623 9.00018 14.0623C8.69268 14.0623 8.43768 13.8073 8.43768 13.4998V11.2498C8.43768 10.9423 8.69268 10.6873 9.00018 10.6873C9.30768 10.6873 9.56268 10.9423 9.56268 11.2498V13.4998Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

const Soccer = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : NAV_ICONS_COLOR }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 5.3L14.35 4.35C16.1589 4.91055 17.7107 6.0939 18.73 7.69L18.34 9.03L16.99 9.49L13 6.7V5.3ZM9.65 4.35L11 5.3V6.7L7.01 9.49L5.66 9.03L5.27 7.69C6.29519 6.09937 7.84478 4.91772 9.65 4.35V4.35ZM7.08 17.11L5.94 17.21C4.68645 15.764 3.99749 13.9137 4 12C4 11.88 4.01 11.77 4.02 11.65L5.02 10.92L6.4 11.4L7.86 15.74L7.08 17.11V17.11ZM14.5 19.59C13.71 19.85 12.87 20 12 20C11.13 20 10.29 19.85 9.5 19.59L8.81 18.1L9.45 17H14.56L15.2 18.11L14.5 19.59V19.59ZM14.27 15H9.73L8.38 10.98L12 8.44L15.63 10.98L14.27 15ZM18.06 17.21L16.92 17.11L16.13 15.74L17.59 11.4L18.98 10.93L19.98 11.66C19.99 11.77 20 11.88 20 12C20 13.99 19.27 15.81 18.06 17.21V17.21Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

const Basketball = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : NAV_ICONS_COLOR }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.09 10.9996H21.95C21.7923 9.4317 21.2644 7.92365 20.41 6.59961C19.5446 7.01341 18.7913 7.62909 18.2135 8.39481C17.6357 9.16053 17.2504 10.0539 17.09 10.9996Z"
          fill="currentColor"
        />
        <path
          d="M6.90999 10.9996C6.74956 10.0539 6.36424 9.16053 5.78646 8.39481C5.20869 7.62909 4.45539 7.01341 3.58999 6.59961C2.73551 7.92365 2.20769 9.4317 2.04999 10.9996H6.90999Z"
          fill="currentColor"
        />
        <path
          d="M15.07 10.9998C15.2265 9.75066 15.6758 8.55613 16.3813 7.51349C17.0868 6.47085 18.0286 5.60958 19.13 4.9998C17.4958 3.32813 15.326 2.28396 13 2.0498V10.9998H15.07Z"
          fill="currentColor"
        />
        <path
          d="M8.93 10.9998H11V2.0498C8.67336 2.28179 6.50291 3.3263 4.87 4.9998C5.97137 5.60958 6.91317 6.47085 7.61869 7.51349C8.32421 8.55613 8.77351 9.75066 8.93 10.9998Z"
          fill="currentColor"
        />
        <path
          d="M15.07 13H13V21.95C15.3266 21.718 17.4971 20.6735 19.13 19C18.0286 18.3902 17.0868 17.529 16.3813 16.4863C15.6758 15.4437 15.2265 14.2491 15.07 13Z"
          fill="currentColor"
        />
        <path
          d="M3.58999 17.4C4.45333 16.9834 5.20487 16.3668 5.78226 15.6016C6.35965 14.8364 6.74625 13.9445 6.90999 13H2.04999C2.20999 14.61 2.75999 16.11 3.58999 17.4Z"
          fill="currentColor"
        />
        <path
          d="M17.09 13C17.2504 13.9457 17.6357 14.8391 18.2135 15.6048C18.7913 16.3705 19.5446 16.9862 20.41 17.4C21.2644 16.076 21.7923 14.5679 21.95 13H17.09Z"
          fill="currentColor"
        />
        <path
          d="M8.93 13C8.77351 14.2491 8.32421 15.4437 7.61869 16.4863C6.91317 17.529 5.97137 18.3902 4.87 19C6.50423 20.6717 8.67397 21.7158 11 21.95V13H8.93Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

const MMA = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : NAV_ICONS_COLOR }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 20C7 20.55 7.45 21 8 21H16C16.55 21 17 20.55 17 20V17H7V20Z"
          fill="currentColor"
        />
        <path
          d="M18 7C17.45 7 17 7.45 17 8V5C17 3.9 16.1 3 15 3H7C5.9 3 5 3.9 5 5V10.8C5 10.93 5.01 11.06 5.04 11.19L5.84 15.19C5.93 15.66 6.34 15.99 6.82 15.99H17.18C17.63 15.99 18.07 15.63 18.16 15.19L18.96 11.19C18.99 11.06 19 10.93 19 10.8V8C19 7.45 18.55 7 18 7ZM15 10H7V7H15V10Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

const Tennis = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : NAV_ICONS_COLOR }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.92901 19.0709C6.71145 20.8517 9.10293 21.8902 11.621 21.9769C11.158 19.2039 11.986 16.2559 14.121 14.1209C16.257 11.9859 19.204 11.1579 21.977 11.6209C21.885 9.18795 20.924 6.78195 19.071 4.92895C17.218 3.07595 14.811 2.11495 12.379 2.02295C12.842 4.79595 12.014 7.74395 9.87901 9.87895C7.74301 12.0139 4.79601 12.8419 2.02301 12.3789C2.10884 14.8972 3.14747 17.289 4.92901 19.0709Z"
          fill="currentColor"
        />
        <path
          d="M15.535 15.535C14.7211 16.3495 14.1209 17.3523 13.7875 18.4544C13.4542 19.5566 13.398 20.7239 13.624 21.853C15.687 21.5217 17.593 20.5479 19.0705 19.0705C20.548 17.593 21.5217 15.687 21.853 13.624C20.7239 13.3982 19.5567 13.4546 18.4546 13.7879C17.3525 14.1212 16.3497 14.7213 15.535 15.535ZM8.465 8.46497C9.27886 7.65045 9.87909 6.64764 10.2125 5.54551C10.5458 4.44339 10.602 3.27602 10.376 2.14697C8.31277 2.4781 6.4066 3.45173 4.92892 4.92923C3.45124 6.40673 2.47737 8.31278 2.146 10.376C3.2752 10.6018 4.44267 10.5455 5.54492 10.2122C6.64718 9.87882 7.65017 9.27869 8.465 8.46497Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};
const Icehockey = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : NAV_ICONS_COLOR }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 7.5C0 5.01562 5.37188 3 12 3C18.6281 3 24 5.01562 24 7.5C24 9.98438 18.6281 12 12 12C5.37188 12 0 9.98438 0 7.5ZM0 11.3531V16.5C0 18.9844 5.37188 21 12 21C18.6281 21 24 18.9844 24 16.5V11.3531C18.6844 15.2109 5.32031 15.2156 0 11.3531Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

const ArrowDown = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : "#48484A" }}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.4534 4.77148H6.81926H3.54676C2.98676 4.77148 2.70676 5.44815 3.10343 5.84482L6.1251 8.86648C6.60926 9.35065 7.39676 9.35065 7.88093 8.86648L9.0301 7.71732L10.9026 5.84482C11.2934 5.44815 11.0134 4.77148 10.4534 4.77148Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

const ArrowUp = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : "#48484A" }}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8967 8.15481L9.02425 6.28231L7.88092 5.13314C7.39675 4.64898 6.60925 4.64898 6.12508 5.13314L3.10342 8.15481C2.70675 8.55148 2.99258 9.22814 3.54675 9.22814H6.81925H10.4534C11.0134 9.22814 11.2934 8.55148 10.8967 8.15481Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

const Live = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : "#FF453A" }}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.1425 1.5H5.8575C3.1275 1.5 1.5 3.1275 1.5 5.8575V12.135C1.5 14.8725 3.1275 16.5 5.8575 16.5H12.135C14.865 16.5 16.4925 14.8725 16.4925 12.1425V5.8575C16.5 3.1275 14.8725 1.5 12.1425 1.5ZM10.995 10.2975L10.035 10.8525L9.075 11.4075C7.8375 12.12 6.825 11.535 6.825 10.11V9V7.89C6.825 6.4575 7.8375 5.88 9.075 6.5925L10.035 7.1475L10.995 7.7025C12.2325 8.415 12.2325 9.585 10.995 10.2975Z"
          fill="#FF453A"
        />
      </svg>
    </>
  );
};

const Favourite = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : "#48484A" }}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.33 2.3252C10.9725 2.3252 9.7575 2.9852 9 3.9977C8.2425 2.9852 7.0275 2.3252 5.67 2.3252C3.3675 2.3252 1.5 4.2002 1.5 6.5177C1.5 7.4102 1.6425 8.2352 1.89 9.0002C3.075 12.7502 6.7275 14.9927 8.535 15.6077C8.79 15.6977 9.21 15.6977 9.465 15.6077C11.2725 14.9927 14.925 12.7502 16.11 9.0002C16.3575 8.2352 16.5 7.4102 16.5 6.5177C16.5 4.2002 14.6325 2.3252 12.33 2.3252Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

const Search = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : "#48484A" }}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.625 16.3125C4.3875 16.3125 0.9375 12.8625 0.9375 8.625C0.9375 4.3875 4.3875 0.9375 8.625 0.9375C12.8625 0.9375 16.3125 4.3875 16.3125 8.625C16.3125 12.8625 12.8625 16.3125 8.625 16.3125ZM8.625 2.0625C5.0025 2.0625 2.0625 5.01 2.0625 8.625C2.0625 12.24 5.0025 15.1875 8.625 15.1875C12.2475 15.1875 15.1875 12.24 15.1875 8.625C15.1875 5.01 12.2475 2.0625 8.625 2.0625Z"
          fill="currentColor"
        />
        <path
          d="M16.5001 17.0626C16.3576 17.0626 16.2151 17.0101 16.1026 16.8976L14.6026 15.3976C14.3851 15.1801 14.3851 14.8201 14.6026 14.6026C14.8201 14.3851 15.1801 14.3851 15.3976 14.6026L16.8976 16.1026C17.1151 16.3201 17.1151 16.6801 16.8976 16.8976C16.7851 17.0101 16.6426 17.0626 16.5001 17.0626Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

const ArrowLeft = ({ color, onClick }) => {
  return (
    <>
      <svg
        onClick={onClick}
        style={{ color: color ? color : "#48484A" }}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM11.625 9.5625H7.7325L9.0225 10.8525C9.24 11.07 9.24 11.43 9.0225 11.6475C8.91 11.76 8.7675 11.8125 8.625 11.8125C8.4825 11.8125 8.34 11.76 8.2275 11.6475L5.9775 9.3975C5.76 9.18 5.76 8.82 5.9775 8.6025L8.2275 6.3525C8.445 6.135 8.805 6.135 9.0225 6.3525C9.24 6.57 9.24 6.93 9.0225 7.1475L7.7325 8.4375H11.625C11.9325 8.4375 12.1875 8.6925 12.1875 9C12.1875 9.3075 11.9325 9.5625 11.625 9.5625Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

const ArrowRight = ({ color, onClick }) => {
  return (
    <>
      <svg
        onClick={onClick}
        style={{ color: color ? color : "#48484A" }}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM12.0225 9.3975L9.7725 11.6475C9.66 11.76 9.5175 11.8125 9.375 11.8125C9.2325 11.8125 9.09 11.76 8.9775 11.6475C8.76 11.43 8.76 11.07 8.9775 10.8525L10.2675 9.5625H6.375C6.0675 9.5625 5.8125 9.3075 5.8125 9C5.8125 8.6925 6.0675 8.4375 6.375 8.4375H10.2675L8.9775 7.1475C8.76 6.93 8.76 6.57 8.9775 6.3525C9.195 6.135 9.555 6.135 9.7725 6.3525L12.0225 8.6025C12.24 8.82 12.24 9.18 12.0225 9.3975Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

const EmptyWallet = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : "white" }}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.1375 2.9626V5.8126H10.0125V2.9626C10.0125 2.7601 9.8325 2.6626 9.7125 2.6626C9.675 2.6626 9.6375 2.6701 9.6 2.6851L3.6525 4.9276C3.255 5.0776 3 5.4526 3 5.8801V6.3826C2.3175 6.8926 1.875 7.7101 1.875 8.6326V5.8801C1.875 4.9876 2.4225 4.1926 3.255 3.8776L9.21 1.6276C9.375 1.5676 9.5475 1.5376 9.7125 1.5376C10.4625 1.5376 11.1375 2.1451 11.1375 2.9626Z"
          fill="white"
        />
        <path
          d="M16.125 10.875V11.625C16.125 11.8275 15.9675 11.9925 15.7575 12H14.6625C14.265 12 13.905 11.7075 13.875 11.3175C13.8525 11.085 13.9425 10.8675 14.0925 10.7175C14.2275 10.575 14.415 10.5 14.6175 10.5H15.75C15.9675 10.5075 16.125 10.6725 16.125 10.875Z"
          fill="white"
        />
        <path
          d="M14.61 9.7125H15.375C15.7875 9.7125 16.125 9.375 16.125 8.9625V8.6325C16.125 7.08 14.8575 5.8125 13.305 5.8125H4.695C4.0575 5.8125 3.4725 6.0225 3 6.3825C2.3175 6.8925 1.875 7.71 1.875 8.6325V13.68C1.875 15.2325 3.1425 16.5 4.695 16.5H13.305C14.8575 16.5 16.125 15.2325 16.125 13.68V13.5375C16.125 13.125 15.7875 12.7875 15.375 12.7875H14.7225C14.0025 12.7875 13.3125 12.345 13.125 11.6475C12.9675 11.0775 13.155 10.53 13.53 10.1625C13.8075 9.8775 14.19 9.7125 14.61 9.7125ZM10.5 9.5625H5.25C4.9425 9.5625 4.6875 9.3075 4.6875 9C4.6875 8.6925 4.9425 8.4375 5.25 8.4375H10.5C10.8075 8.4375 11.0625 8.6925 11.0625 9C11.0625 9.3075 10.8075 9.5625 10.5 9.5625Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};
const Bets = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : "white" }}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.8925 3.72C12.8925 3.7275 12.8925 3.7275 12.8925 3.735C12.705 3.7275 12.5175 3.72 12.315 3.72H6.54004L7.34254 2.925C8.07754 2.1825 8.88754 1.5 9.82504 1.5C10.77 1.5 11.58 2.1825 12.315 2.925L12.735 3.345C12.84 3.4425 12.8925 3.5775 12.8925 3.72Z"
          fill="currentColor"
        />
        <path
          d="M15.63 9.8774C15.9225 9.8774 16.155 9.6374 16.155 9.3374V8.6774C16.155 5.7299 15.255 4.8374 12.315 4.8374H7.58997H5.68497C2.74497 4.8374 1.84497 5.7374 1.84497 8.6774V8.9999C1.84497 9.2999 2.07747 9.5324 2.36997 9.5324C2.99997 9.5324 3.50247 10.0424 3.50247 10.6649C3.50247 11.2874 2.99997 11.8049 2.36997 11.8049C2.07747 11.8049 1.84497 12.0374 1.84497 12.3374V12.6599C1.84497 15.6074 2.74497 16.4999 5.68497 16.4999H7.58247H12.3075C15.2475 16.4999 16.1475 15.5999 16.1475 12.6599C16.1475 12.3674 15.915 12.1274 15.6225 12.1274C14.9925 12.1274 14.49 11.6249 14.49 11.0024C14.4975 10.3799 15 9.8774 15.63 9.8774ZM8.11497 14.1449C8.11497 14.4374 7.87497 14.6774 7.58247 14.6774C7.28997 14.6774 7.04997 14.4374 7.04997 14.1449V12.1349C7.04997 11.8424 7.28997 11.6024 7.58247 11.6024C7.87497 11.6024 8.11497 11.8424 8.11497 12.1349V14.1449ZM8.11497 9.2024C8.11497 9.4949 7.87497 9.7349 7.58247 9.7349C7.28997 9.7349 7.04997 9.4949 7.04997 9.2024V7.1924C7.04997 6.8999 7.28997 6.6599 7.58247 6.6599C7.87497 6.6599 8.11497 6.8999 8.11497 7.1924V9.2024Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

const Bets2 = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : "#8E8E93" }}
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.7751 3.85999H10.0351V6.87999C10.0351 7.26999 9.71512 7.57999 9.33512 7.57999C8.95512 7.57999 8.63512 7.26999 8.63512 6.87999V3.85999H7.47512C3.52512 3.85999 2.22512 5.03999 2.13512 8.72999C2.12512 8.90999 2.20512 9.09999 2.33512 9.22999C2.46512 9.36999 2.63512 9.43999 2.83512 9.43999C4.23512 9.43999 5.38512 10.6 5.38512 12C5.38512 13.4 4.23512 14.56 2.83512 14.56C2.64512 14.56 2.46512 14.63 2.33512 14.77C2.20512 14.9 2.12512 15.09 2.13512 15.27C2.22512 18.96 3.52512 20.14 7.47512 20.14H8.63512V17.12C8.63512 16.73 8.95512 16.42 9.33512 16.42C9.71512 16.42 10.0351 16.73 10.0351 17.12V20.14H16.7751C20.8751 20.14 22.1251 18.89 22.1251 14.79V9.20999C22.1251 5.10999 20.8751 3.85999 16.7751 3.85999ZM18.5951 11.9L17.6651 12.8C17.6251 12.83 17.6151 12.89 17.6251 12.94L17.8451 14.21C17.8851 14.44 17.7951 14.68 17.5951 14.82C17.4051 14.96 17.1551 14.98 16.9451 14.87L15.7951 14.27C15.7551 14.25 15.6951 14.25 15.6551 14.27L14.5051 14.87C14.4151 14.92 14.3151 14.94 14.2151 14.94C14.0851 14.94 13.9651 14.9 13.8551 14.82C13.6651 14.68 13.5651 14.45 13.6051 14.21L13.8251 12.94C13.8351 12.89 13.8151 12.84 13.7851 12.8L12.8551 11.9C12.6851 11.74 12.6251 11.49 12.6951 11.27C12.7651 11.04 12.9551 10.88 13.1951 10.85L14.4751 10.66C14.5251 10.65 14.5651 10.62 14.5951 10.58L15.1651 9.41999C15.2751 9.20999 15.4851 9.07999 15.7251 9.07999C15.9651 9.07999 16.1751 9.20999 16.2751 9.41999L16.8451 10.58C16.8651 10.63 16.9051 10.66 16.9551 10.66L18.2351 10.85C18.4751 10.88 18.6651 11.05 18.7351 11.27C18.8251 11.49 18.7651 11.73 18.5951 11.9Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

const Close = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : "white" }}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.1425 1.5H5.8575C3.1275 1.5 1.5 3.1275 1.5 5.8575V12.135C1.5 14.8725 3.1275 16.5 5.8575 16.5H12.135C14.865 16.5 16.4925 14.8725 16.4925 12.1425V5.8575C16.5 3.1275 14.8725 1.5 12.1425 1.5ZM11.52 10.725C11.7375 10.9425 11.7375 11.3025 11.52 11.52C11.4075 11.6325 11.265 11.685 11.1225 11.685C10.98 11.685 10.8375 11.6325 10.725 11.52L9 9.795L7.275 11.52C7.1625 11.6325 7.02 11.685 6.8775 11.685C6.735 11.685 6.5925 11.6325 6.48 11.52C6.2625 11.3025 6.2625 10.9425 6.48 10.725L8.205 9L6.48 7.275C6.2625 7.0575 6.2625 6.6975 6.48 6.48C6.6975 6.2625 7.0575 6.2625 7.275 6.48L9 8.205L10.725 6.48C10.9425 6.2625 11.3025 6.2625 11.52 6.48C11.7375 6.6975 11.7375 7.0575 11.52 7.275L9.795 9L11.52 10.725Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

const SaveAdd = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : "white" }}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.4999 3.8325V12.3525C16.4999 13.44 15.7199 13.8975 14.7674 13.3725L13.3199 12.5625C13.1999 12.495 13.1249 12.3675 13.1249 12.2325V6.7425C13.1249 4.8375 11.5724 3.285 9.66738 3.285H6.61488C6.33738 3.285 6.14238 2.9925 6.26988 2.7525C6.65988 2.01 7.43988 1.5 8.33238 1.5H14.1674C15.4499 1.5 16.4999 2.55 16.4999 3.8325Z"
          fill="currentColor"
        />
        <path
          d="M9.6675 4.41016H3.8325C2.55 4.41016 1.5 5.46016 1.5 6.74266V15.2627C1.5 16.3502 2.28 16.8077 3.2325 16.2827L6.18 14.6402C6.495 14.4677 7.005 14.4677 7.32 14.6402L10.2675 16.2827C11.22 16.8077 12 16.3502 12 15.2627V6.74266C12 5.46016 10.95 4.41016 9.6675 4.41016ZM8.25 9.56266H7.3125V10.5002C7.3125 10.8077 7.0575 11.0627 6.75 11.0627C6.4425 11.0627 6.1875 10.8077 6.1875 10.5002V9.56266H5.25C4.9425 9.56266 4.6875 9.30766 4.6875 9.00016C4.6875 8.69266 4.9425 8.43766 5.25 8.43766H6.1875V7.50016C6.1875 7.19266 6.4425 6.93766 6.75 6.93766C7.0575 6.93766 7.3125 7.19266 7.3125 7.50016V8.43766H8.25C8.5575 8.43766 8.8125 8.69266 8.8125 9.00016C8.8125 9.30766 8.5575 9.56266 8.25 9.56266Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};
const Hamburger = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : "white" }}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.25 9.6875H3.75C3.2375 9.6875 2.8125 9.2625 2.8125 8.75C2.8125 8.2375 3.2375 7.8125 3.75 7.8125H26.25C26.7625 7.8125 27.1875 8.2375 27.1875 8.75C27.1875 9.2625 26.7625 9.6875 26.25 9.6875Z"
          fill="white"
        />
        <path
          d="M26.25 15.9375H3.75C3.2375 15.9375 2.8125 15.5125 2.8125 15C2.8125 14.4875 3.2375 14.0625 3.75 14.0625H26.25C26.7625 14.0625 27.1875 14.4875 27.1875 15C27.1875 15.5125 26.7625 15.9375 26.25 15.9375Z"
          fill="white"
        />
        <path
          d="M26.25 22.1875H3.75C3.2375 22.1875 2.8125 21.7625 2.8125 21.25C2.8125 20.7375 3.2375 20.3125 3.75 20.3125H26.25C26.7625 20.3125 27.1875 20.7375 27.1875 21.25C27.1875 21.7625 26.7625 22.1875 26.25 22.1875Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};
const CloseMenu = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : "#48484A" }}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.2375 2.5H9.7625C5.2125 2.5 2.5 5.2125 2.5 9.7625V20.225C2.5 24.7875 5.2125 27.5 9.7625 27.5H20.225C24.775 27.5 27.4875 24.7875 27.4875 20.2375V9.7625C27.5 5.2125 24.7875 2.5 20.2375 2.5ZM19.2 17.875C19.5625 18.2375 19.5625 18.8375 19.2 19.2C19.0125 19.3875 18.775 19.475 18.5375 19.475C18.3 19.475 18.0625 19.3875 17.875 19.2L15 16.325L12.125 19.2C11.9375 19.3875 11.7 19.475 11.4625 19.475C11.225 19.475 10.9875 19.3875 10.8 19.2C10.4375 18.8375 10.4375 18.2375 10.8 17.875L13.675 15L10.8 12.125C10.4375 11.7625 10.4375 11.1625 10.8 10.8C11.1625 10.4375 11.7625 10.4375 12.125 10.8L15 13.675L17.875 10.8C18.2375 10.4375 18.8375 10.4375 19.2 10.8C19.5625 11.1625 19.5625 11.7625 19.2 12.125L16.325 15L19.2 17.875Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};
const CloseMenuCircle = ({ color }) => {
  return (
    <>
      <svg style={{ color: color ? color : "#8E8E93" }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1425 1.5H5.8575C3.1275 1.5 1.5 3.1275 1.5 5.8575V12.135C1.5 14.8725 3.1275 16.5 5.8575 16.5H12.135C14.865 16.5 16.4925 14.8725 16.4925 12.1425V5.8575C16.5 3.1275 14.8725 1.5 12.1425 1.5ZM11.52 10.725C11.7375 10.9425 11.7375 11.3025 11.52 11.52C11.4075 11.6325 11.265 11.685 11.1225 11.685C10.98 11.685 10.8375 11.6325 10.725 11.52L9 9.795L7.275 11.52C7.1625 11.6325 7.02 11.685 6.8775 11.685C6.735 11.685 6.5925 11.6325 6.48 11.52C6.2625 11.3025 6.2625 10.9425 6.48 10.725L8.205 9L6.48 7.275C6.2625 7.0575 6.2625 6.6975 6.48 6.48C6.6975 6.2625 7.0575 6.2625 7.275 6.48L9 8.205L10.725 6.48C10.9425 6.2625 11.3025 6.2625 11.52 6.48C11.7375 6.6975 11.7375 7.0575 11.52 7.275L9.795 9L11.52 10.725Z" fill="currentColor"/>
</svg>

    </>
  );
};
const Crypto = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : "#8E8E93" }}
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.4199 16.7501C22.0899 19.4101 19.9099 21.5901 17.2499 21.9201C15.6399 22.1201 14.1399 21.6801 12.9699 20.8201C12.2999 20.3301 12.4599 19.2901 13.2599 19.0501C16.2699 18.1401 18.6399 15.7601 19.5599 12.7501C19.7999 11.9601 20.8399 11.8001 21.3299 12.4601C22.1799 13.6401 22.6199 15.1401 22.4199 16.7501Z"
          fill="currentColor"
        />
        <path
          d="M10.49 2C6.08 2 2.5 5.58 2.5 9.99C2.5 14.4 6.08 17.98 10.49 17.98C14.9 17.98 18.48 14.4 18.48 9.99C18.47 5.58 14.9 2 10.49 2ZM9.55 8.87L11.96 9.71C12.83 10.02 13.25 10.63 13.25 11.57C13.25 12.65 12.39 13.54 11.34 13.54H11.25V13.59C11.25 14 10.91 14.34 10.5 14.34C10.09 14.34 9.75 14 9.75 13.59V13.53C8.64 13.48 7.75 12.55 7.75 11.39C7.75 10.98 8.09 10.64 8.5 10.64C8.91 10.64 9.25 10.98 9.25 11.39C9.25 11.75 9.51 12.04 9.83 12.04H11.33C11.56 12.04 11.74 11.83 11.74 11.57C11.74 11.22 11.68 11.2 11.45 11.12L9.04 10.28C8.18 9.98 7.75 9.37 7.75 8.42C7.75 7.34 8.61 6.45 9.66 6.45H9.75V6.41C9.75 6 10.09 5.66 10.5 5.66C10.91 5.66 11.25 6 11.25 6.41V6.47C12.36 6.52 13.25 7.45 13.25 8.61C13.25 9.02 12.91 9.36 12.5 9.36C12.09 9.36 11.75 9.02 11.75 8.61C11.75 8.25 11.49 7.96 11.17 7.96H9.67C9.44 7.96 9.26 8.17 9.26 8.43C9.25 8.77 9.31 8.79 9.55 8.87Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};
const LeaderBoard = ({ color }) => {
  return (
    <>
      <svg
        style={{ color: color ? color : "#8E8E93" }}
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.083 18.25H9.83301C8.73301 18.25 7.83301 19.15 7.83301 20.25V20.5H6.83301C6.42301 20.5 6.08301 20.84 6.08301 21.25C6.08301 21.66 6.42301 22 6.83301 22H18.833C19.243 22 19.583 21.66 19.583 21.25C19.583 20.84 19.243 20.5 18.833 20.5H17.833V20.25C17.833 19.15 16.933 18.25 15.833 18.25H13.583V15.96C13.333 15.99 13.083 16 12.833 16C12.583 16 12.333 15.99 12.083 15.96V18.25Z"
          fill="currentColor"
        />
        <path
          d="M19.3128 11.64C19.9728 11.39 20.5528 10.98 21.0128 10.52C21.9428 9.49 22.5528 8.26 22.5528 6.82C22.5528 5.38 21.4228 4.25 19.9828 4.25H19.4228C18.7728 2.92 17.4128 2 15.8328 2H9.83279C8.25279 2 6.89279 2.92 6.24279 4.25H5.68279C4.24279 4.25 3.11279 5.38 3.11279 6.82C3.11279 8.26 3.72279 9.49 4.65279 10.52C5.11279 10.98 5.69279 11.39 6.35279 11.64C7.39279 14.2 9.89279 16 12.8328 16C15.7728 16 18.2728 14.2 19.3128 11.64ZM15.6728 8.45L15.0528 9.21C14.9528 9.32 14.8828 9.54 14.8928 9.69L14.9528 10.67C14.9928 11.27 14.5628 11.58 14.0028 11.36L13.0928 11C12.9528 10.95 12.7128 10.95 12.5728 11L11.6628 11.36C11.1028 11.58 10.6728 11.27 10.7128 10.67L10.7728 9.69C10.7828 9.54 10.7128 9.32 10.6128 9.21L9.99279 8.45C9.60279 7.99 9.77279 7.48 10.3528 7.33L11.3028 7.09C11.4528 7.05 11.6328 6.91 11.7128 6.78L12.2428 5.96C12.5728 5.45 13.0928 5.45 13.4228 5.96L13.9528 6.78C14.0328 6.91 14.2128 7.05 14.3628 7.09L15.3128 7.33C15.8928 7.48 16.0628 7.99 15.6728 8.45Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};
const Save2 = ({ color }) => {
  return (
    <>
  <svg style={{ color: color ? color : "white" }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.6675 4.41016H3.8325C2.55 4.41016 1.5 5.46016 1.5 6.74266V15.2627C1.5 16.3502 2.28 16.8152 3.2325 16.2827L6.18 14.6402C6.495 14.4677 7.005 14.4677 7.3125 14.6402L10.26 16.2827C11.22 16.8077 12 16.3502 12 15.2627V6.74266C12 5.46016 10.95 4.41016 9.6675 4.41016Z" fill="currentColor"/>
<path d="M16.4999 3.8325V12.3525C16.4999 13.44 15.7199 13.8975 14.7674 13.3725L13.3199 12.5625C13.1999 12.495 13.1249 12.3675 13.1249 12.2325V6.7425C13.1249 4.8375 11.5724 3.285 9.66738 3.285H6.61488C6.33738 3.285 6.14238 2.9925 6.26988 2.7525C6.65988 2.01 7.43988 1.5 8.33238 1.5H14.1674C15.4499 1.5 16.4999 2.55 16.4999 3.8325Z" fill="currentColor"/>
</svg>

    </>
  );
};
const CopyBetID = ({ color }) => {
  return (
    <>
 <svg style={{ color: color ? color : "#48484A" }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6666 8.60016V11.4002C10.6666 13.7335 9.73331 14.6668 7.39998 14.6668H4.59998C2.26665 14.6668 1.33331 13.7335 1.33331 11.4002V8.60016C1.33331 6.26683 2.26665 5.3335 4.59998 5.3335H7.39998C9.73331 5.3335 10.6666 6.26683 10.6666 8.60016Z" fill="currentColor"/>
<path d="M11.4 1.3335H8.60003C6.67933 1.3335 5.7117 1.97043 5.42926 3.49277C5.32767 4.04033 5.79502 4.50016 6.35193 4.50016H7.40003C10.2 4.50016 11.5 5.80016 11.5 8.60016V9.64826C11.5 10.2052 11.9599 10.6725 12.5074 10.5709C14.0298 10.2885 14.6667 9.32086 14.6667 7.40016V4.60016C14.6667 2.26683 13.7334 1.3335 11.4 1.3335Z" fill="currentColor"/>
</svg>

    </>
  );
};
const SingleBet = ({ color }) => {
  return (
    <>
  <svg style={{ color: color ? color : "white" }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8876 9.7051C14.8876 10.3051 15.3751 10.8001 15.9751 10.8001C16.2601 10.8001 16.5001 11.0326 16.5001 11.3176C16.5001 14.1976 15.6301 15.0676 12.7501 15.0676H8.81257V13.8751C8.81257 13.5826 8.58757 13.3426 8.30257 13.3201C8.28757 13.3126 8.26507 13.3126 8.25007 13.3126C7.94257 13.3126 7.68757 13.5676 7.68757 13.8751V15.0676H6.36757C4.95757 15.0676 4.23007 14.0101 3.57007 12.4126L3.44257 12.0976C3.33757 11.8276 3.46507 11.5201 3.73507 11.4151C4.01257 11.3101 4.23007 11.0926 4.34257 10.8076C4.46257 10.5301 4.46257 10.2226 4.35007 9.9451C4.11007 9.3676 3.45007 9.09011 2.86507 9.32261C2.73757 9.38261 2.58757 9.38261 2.46007 9.32261C2.33257 9.2701 2.23507 9.1651 2.17507 9.0301L2.06257 8.7301C0.945068 6.01511 1.43257 4.8526 4.14757 3.7276L5.98507 2.9701C6.25507 2.8576 6.56257 2.9851 6.66757 3.2551L8.30257 6.8176C7.99507 6.8176 7.68757 7.0651 7.68757 7.3726V10.6276C7.68757 10.9351 7.94257 11.1901 8.25007 11.1901C8.26507 11.1901 8.28757 11.1901 8.30257 11.1826C8.58757 11.1601 8.81257 10.9201 8.81257 10.6276V7.3726C8.81257 7.0801 8.58757 6.8401 8.30257 6.8176V3.6976H12.7501C15.6301 3.6976 16.5001 4.56761 16.5001 7.44761V8.0851C16.5001 8.3776 16.2601 8.6101 15.9751 8.6101C15.3751 8.6101 14.8876 9.0976 14.8876 9.7051Z" fill="currentColor"/>
</svg>

    </>
  );
};
const Trash = ({ color }) => {
  return (
    <>
  <svg style={{ color: color ? color : "#48484A" }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8027 3.9225C14.5952 3.8025 13.3877 3.7125 12.1727 3.645V3.6375L12.0077 2.6625C11.8952 1.9725 11.7302 0.9375 9.97524 0.9375H8.01024C6.26274 0.9375 6.09774 1.9275 5.97774 2.655L5.82024 3.615C5.12274 3.66 4.42524 3.705 3.72774 3.7725L2.19774 3.9225C1.88274 3.9525 1.65774 4.23 1.68774 4.5375C1.71774 4.845 1.98774 5.07 2.30274 5.04L3.83274 4.89C7.76274 4.5 11.7227 4.65 15.6977 5.0475C15.7202 5.0475 15.7352 5.0475 15.7577 5.0475C16.0427 5.0475 16.2902 4.83 16.3202 4.5375C16.3427 4.23 16.1177 3.9525 15.8027 3.9225Z" fill="currentColor"/>
<path d="M14.4223 6.105C14.2423 5.9175 13.9948 5.8125 13.7398 5.8125H4.25981C4.00481 5.8125 3.74981 5.9175 3.57731 6.105C3.40481 6.2925 3.30731 6.5475 3.32231 6.81L3.78731 14.505C3.86981 15.645 3.97481 17.07 6.59231 17.07H11.4073C14.0248 17.07 14.1298 15.6525 14.2123 14.505L14.6773 6.8175C14.6923 6.5475 14.5948 6.2925 14.4223 6.105ZM10.2448 13.3125H7.74731C7.43981 13.3125 7.18481 13.0575 7.18481 12.75C7.18481 12.4425 7.43981 12.1875 7.74731 12.1875H10.2448C10.5523 12.1875 10.8073 12.4425 10.8073 12.75C10.8073 13.0575 10.5523 13.3125 10.2448 13.3125ZM10.8748 10.3125H7.12481C6.81731 10.3125 6.56231 10.0575 6.56231 9.75C6.56231 9.4425 6.81731 9.1875 7.12481 9.1875H10.8748C11.1823 9.1875 11.4373 9.4425 11.4373 9.75C11.4373 10.0575 11.1823 10.3125 10.8748 10.3125Z" fill="currentColor"/>
</svg>


    </>
  );
};
const Activity = ({ color }) => {
  return (
    <>
<svg style={{ color: color ? color : "#32D74B" }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1425 1.5H5.8575C3.1275 1.5 1.5 3.1275 1.5 5.8575V12.135C1.5 14.8725 3.1275 16.5 5.8575 16.5H12.135C14.865 16.5 16.4925 14.8725 16.4925 12.1425V5.8575C16.5 3.1275 14.8725 1.5 12.1425 1.5ZM12.945 7.47L11.2125 9.705C10.995 9.9825 10.6875 10.1625 10.335 10.2C9.9825 10.245 9.6375 10.1475 9.36 9.93L7.9875 8.85C7.935 8.805 7.875 8.805 7.845 8.8125C7.815 8.8125 7.7625 8.8275 7.7175 8.8875L5.9325 11.205C5.82 11.3475 5.655 11.4225 5.49 11.4225C5.37 11.4225 5.25 11.385 5.145 11.3025C4.8975 11.115 4.8525 10.7625 5.04 10.515L6.825 8.1975C7.0425 7.92 7.35 7.74 7.7025 7.695C8.0475 7.65 8.4 7.7475 8.6775 7.965L10.05 9.045C10.1025 9.09 10.155 9.09 10.1925 9.0825C10.2225 9.0825 10.275 9.0675 10.32 9.0075L12.0525 6.7725C12.24 6.525 12.6 6.48 12.84 6.675C13.0875 6.8775 13.1325 7.23 12.945 7.47Z" fill="currentColor"/>
</svg>
    </>
  );
};

const icons = {
  Home,
  Soccer,
  Basketball,
  Tennis,
  MMA,
  Icehockey,
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  Live,
  Favourite,
  Search,
  EmptyWallet,
  Bets,
  Close,
  SaveAdd,
  Hamburger,
  CloseMenu,
  Crypto,
  LeaderBoard,
  Bets2, CloseMenuCircle, Save2, SingleBet, Trash, Activity, CopyBetID
};
export default icons;
