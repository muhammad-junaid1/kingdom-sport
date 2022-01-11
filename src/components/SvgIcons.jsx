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
     <svg style={{ color: color ? color : NAV_ICONS_COLOR }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.09 10.9996H21.95C21.7923 9.4317 21.2644 7.92365 20.41 6.59961C19.5446 7.01341 18.7913 7.62909 18.2135 8.39481C17.6357 9.16053 17.2504 10.0539 17.09 10.9996Z" fill="currentColor"/>
<path d="M6.90999 10.9996C6.74956 10.0539 6.36424 9.16053 5.78646 8.39481C5.20869 7.62909 4.45539 7.01341 3.58999 6.59961C2.73551 7.92365 2.20769 9.4317 2.04999 10.9996H6.90999Z" fill="currentColor"/>
<path d="M15.07 10.9998C15.2265 9.75066 15.6758 8.55613 16.3813 7.51349C17.0868 6.47085 18.0286 5.60958 19.13 4.9998C17.4958 3.32813 15.326 2.28396 13 2.0498V10.9998H15.07Z" fill="currentColor"/>
<path d="M8.93 10.9998H11V2.0498C8.67336 2.28179 6.50291 3.3263 4.87 4.9998C5.97137 5.60958 6.91317 6.47085 7.61869 7.51349C8.32421 8.55613 8.77351 9.75066 8.93 10.9998Z" fill="currentColor"/>
<path d="M15.07 13H13V21.95C15.3266 21.718 17.4971 20.6735 19.13 19C18.0286 18.3902 17.0868 17.529 16.3813 16.4863C15.6758 15.4437 15.2265 14.2491 15.07 13Z" fill="currentColor"/>
<path d="M3.58999 17.4C4.45333 16.9834 5.20487 16.3668 5.78226 15.6016C6.35965 14.8364 6.74625 13.9445 6.90999 13H2.04999C2.20999 14.61 2.75999 16.11 3.58999 17.4Z" fill="currentColor"/>
<path d="M17.09 13C17.2504 13.9457 17.6357 14.8391 18.2135 15.6048C18.7913 16.3705 19.5446 16.9862 20.41 17.4C21.2644 16.076 21.7923 14.5679 21.95 13H17.09Z" fill="currentColor"/>
<path d="M8.93 13C8.77351 14.2491 8.32421 15.4437 7.61869 16.4863C6.91317 17.529 5.97137 18.3902 4.87 19C6.50423 20.6717 8.67397 21.7158 11 21.95V13H8.93Z" fill="currentColor"/>
</svg>

    </>
  );
};

const MMA = ({ color }) => {
  return (
    <>
<svg style={{ color: color ? color : NAV_ICONS_COLOR }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 20C7 20.55 7.45 21 8 21H16C16.55 21 17 20.55 17 20V17H7V20Z" fill="currentColor"/>
<path d="M18 7C17.45 7 17 7.45 17 8V5C17 3.9 16.1 3 15 3H7C5.9 3 5 3.9 5 5V10.8C5 10.93 5.01 11.06 5.04 11.19L5.84 15.19C5.93 15.66 6.34 15.99 6.82 15.99H17.18C17.63 15.99 18.07 15.63 18.16 15.19L18.96 11.19C18.99 11.06 19 10.93 19 10.8V8C19 7.45 18.55 7 18 7ZM15 10H7V7H15V10Z" fill="currentColor"/>
</svg>


    </>
  );
};

const Tennis = ({ color }) => {
  return (
    <>
<svg style={{ color: color ? color : NAV_ICONS_COLOR }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.92901 19.0709C6.71145 20.8517 9.10293 21.8902 11.621 21.9769C11.158 19.2039 11.986 16.2559 14.121 14.1209C16.257 11.9859 19.204 11.1579 21.977 11.6209C21.885 9.18795 20.924 6.78195 19.071 4.92895C17.218 3.07595 14.811 2.11495 12.379 2.02295C12.842 4.79595 12.014 7.74395 9.87901 9.87895C7.74301 12.0139 4.79601 12.8419 2.02301 12.3789C2.10884 14.8972 3.14747 17.289 4.92901 19.0709Z" fill="currentColor"/>
<path d="M15.535 15.535C14.7211 16.3495 14.1209 17.3523 13.7875 18.4544C13.4542 19.5566 13.398 20.7239 13.624 21.853C15.687 21.5217 17.593 20.5479 19.0705 19.0705C20.548 17.593 21.5217 15.687 21.853 13.624C20.7239 13.3982 19.5567 13.4546 18.4546 13.7879C17.3525 14.1212 16.3497 14.7213 15.535 15.535ZM8.465 8.46497C9.27886 7.65045 9.87909 6.64764 10.2125 5.54551C10.5458 4.44339 10.602 3.27602 10.376 2.14697C8.31277 2.4781 6.4066 3.45173 4.92892 4.92923C3.45124 6.40673 2.47737 8.31278 2.146 10.376C3.2752 10.6018 4.44267 10.5455 5.54492 10.2122C6.64718 9.87882 7.65017 9.27869 8.465 8.46497Z" fill="currentColor"/>
</svg>



    </>
  );
};
const Icehockey = ({ color }) => {
  return (
    <>
<svg style={{ color: color ? color : NAV_ICONS_COLOR }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 7.5C0 5.01562 5.37188 3 12 3C18.6281 3 24 5.01562 24 7.5C24 9.98438 18.6281 12 12 12C5.37188 12 0 9.98438 0 7.5ZM0 11.3531V16.5C0 18.9844 5.37188 21 12 21C18.6281 21 24 18.9844 24 16.5V11.3531C18.6844 15.2109 5.32031 15.2156 0 11.3531Z" fill="currentColor"/>
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
          fill="#4E2D93"
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
        
        <svg onClick={onClick} style={{ color: color ? color : "#48484A" }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM11.625 9.5625H7.7325L9.0225 10.8525C9.24 11.07 9.24 11.43 9.0225 11.6475C8.91 11.76 8.7675 11.8125 8.625 11.8125C8.4825 11.8125 8.34 11.76 8.2275 11.6475L5.9775 9.3975C5.76 9.18 5.76 8.82 5.9775 8.6025L8.2275 6.3525C8.445 6.135 8.805 6.135 9.0225 6.3525C9.24 6.57 9.24 6.93 9.0225 7.1475L7.7325 8.4375H11.625C11.9325 8.4375 12.1875 8.6925 12.1875 9C12.1875 9.3075 11.9325 9.5625 11.625 9.5625Z" fill="currentColor"/>
</svg>

    </>
  );
};

const ArrowRight = ({ color, onClick }) => {
  return (
    <>
        <svg onClick={onClick} style={{ color: color ? color : "#48484A" }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM12.0225 9.3975L9.7725 11.6475C9.66 11.76 9.5175 11.8125 9.375 11.8125C9.2325 11.8125 9.09 11.76 8.9775 11.6475C8.76 11.43 8.76 11.07 8.9775 10.8525L10.2675 9.5625H6.375C6.0675 9.5625 5.8125 9.3075 5.8125 9C5.8125 8.6925 6.0675 8.4375 6.375 8.4375H10.2675L8.9775 7.1475C8.76 6.93 8.76 6.57 8.9775 6.3525C9.195 6.135 9.555 6.135 9.7725 6.3525L12.0225 8.6025C12.24 8.82 12.24 9.18 12.0225 9.3975Z" fill="currentColor"/>
</svg>


    </>
  );
};

const EmptyWallet = ({ color }) => {
  return (
    <>
        
        <svg style={{ color: color ? color : "white" }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1375 2.9626V5.8126H10.0125V2.9626C10.0125 2.7601 9.8325 2.6626 9.7125 2.6626C9.675 2.6626 9.6375 2.6701 9.6 2.6851L3.6525 4.9276C3.255 5.0776 3 5.4526 3 5.8801V6.3826C2.3175 6.8926 1.875 7.7101 1.875 8.6326V5.8801C1.875 4.9876 2.4225 4.1926 3.255 3.8776L9.21 1.6276C9.375 1.5676 9.5475 1.5376 9.7125 1.5376C10.4625 1.5376 11.1375 2.1451 11.1375 2.9626Z" fill="white"/>
<path d="M16.125 10.875V11.625C16.125 11.8275 15.9675 11.9925 15.7575 12H14.6625C14.265 12 13.905 11.7075 13.875 11.3175C13.8525 11.085 13.9425 10.8675 14.0925 10.7175C14.2275 10.575 14.415 10.5 14.6175 10.5H15.75C15.9675 10.5075 16.125 10.6725 16.125 10.875Z" fill="white"/>
<path d="M14.61 9.7125H15.375C15.7875 9.7125 16.125 9.375 16.125 8.9625V8.6325C16.125 7.08 14.8575 5.8125 13.305 5.8125H4.695C4.0575 5.8125 3.4725 6.0225 3 6.3825C2.3175 6.8925 1.875 7.71 1.875 8.6325V13.68C1.875 15.2325 3.1425 16.5 4.695 16.5H13.305C14.8575 16.5 16.125 15.2325 16.125 13.68V13.5375C16.125 13.125 15.7875 12.7875 15.375 12.7875H14.7225C14.0025 12.7875 13.3125 12.345 13.125 11.6475C12.9675 11.0775 13.155 10.53 13.53 10.1625C13.8075 9.8775 14.19 9.7125 14.61 9.7125ZM10.5 9.5625H5.25C4.9425 9.5625 4.6875 9.3075 4.6875 9C4.6875 8.6925 4.9425 8.4375 5.25 8.4375H10.5C10.8075 8.4375 11.0625 8.6925 11.0625 9C11.0625 9.3075 10.8075 9.5625 10.5 9.5625Z" fill="currentColor"/>
</svg>


    </>
  );
};
const Bets = ({ color }) => {
  return (
    <>
        
        <svg style={{ color: color ? color : "white" }}  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8925 3.72C12.8925 3.7275 12.8925 3.7275 12.8925 3.735C12.705 3.7275 12.5175 3.72 12.315 3.72H6.54004L7.34254 2.925C8.07754 2.1825 8.88754 1.5 9.82504 1.5C10.77 1.5 11.58 2.1825 12.315 2.925L12.735 3.345C12.84 3.4425 12.8925 3.5775 12.8925 3.72Z" fill="currentColor"/>
<path d="M15.63 9.8774C15.9225 9.8774 16.155 9.6374 16.155 9.3374V8.6774C16.155 5.7299 15.255 4.8374 12.315 4.8374H7.58997H5.68497C2.74497 4.8374 1.84497 5.7374 1.84497 8.6774V8.9999C1.84497 9.2999 2.07747 9.5324 2.36997 9.5324C2.99997 9.5324 3.50247 10.0424 3.50247 10.6649C3.50247 11.2874 2.99997 11.8049 2.36997 11.8049C2.07747 11.8049 1.84497 12.0374 1.84497 12.3374V12.6599C1.84497 15.6074 2.74497 16.4999 5.68497 16.4999H7.58247H12.3075C15.2475 16.4999 16.1475 15.5999 16.1475 12.6599C16.1475 12.3674 15.915 12.1274 15.6225 12.1274C14.9925 12.1274 14.49 11.6249 14.49 11.0024C14.4975 10.3799 15 9.8774 15.63 9.8774ZM8.11497 14.1449C8.11497 14.4374 7.87497 14.6774 7.58247 14.6774C7.28997 14.6774 7.04997 14.4374 7.04997 14.1449V12.1349C7.04997 11.8424 7.28997 11.6024 7.58247 11.6024C7.87497 11.6024 8.11497 11.8424 8.11497 12.1349V14.1449ZM8.11497 9.2024C8.11497 9.4949 7.87497 9.7349 7.58247 9.7349C7.28997 9.7349 7.04997 9.4949 7.04997 9.2024V7.1924C7.04997 6.8999 7.28997 6.6599 7.58247 6.6599C7.87497 6.6599 8.11497 6.8999 8.11497 7.1924V9.2024Z" fill="currentColor"/>
</svg>


    </>
  );
};

const Close = ({ color }) => {
  return (
    <>
        <svg style={{ color: color ? color : "white" }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1425 1.5H5.8575C3.1275 1.5 1.5 3.1275 1.5 5.8575V12.135C1.5 14.8725 3.1275 16.5 5.8575 16.5H12.135C14.865 16.5 16.4925 14.8725 16.4925 12.1425V5.8575C16.5 3.1275 14.8725 1.5 12.1425 1.5ZM11.52 10.725C11.7375 10.9425 11.7375 11.3025 11.52 11.52C11.4075 11.6325 11.265 11.685 11.1225 11.685C10.98 11.685 10.8375 11.6325 10.725 11.52L9 9.795L7.275 11.52C7.1625 11.6325 7.02 11.685 6.8775 11.685C6.735 11.685 6.5925 11.6325 6.48 11.52C6.2625 11.3025 6.2625 10.9425 6.48 10.725L8.205 9L6.48 7.275C6.2625 7.0575 6.2625 6.6975 6.48 6.48C6.6975 6.2625 7.0575 6.2625 7.275 6.48L9 8.205L10.725 6.48C10.9425 6.2625 11.3025 6.2625 11.52 6.48C11.7375 6.6975 11.7375 7.0575 11.52 7.275L9.795 9L11.52 10.725Z" fill="currentColor"/>
</svg>


    </>
  );
};

const SaveAdd = ({ color }) => {
  return (
    <>
      <svg style={{ color: color ? color : "white" }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4999 3.8325V12.3525C16.4999 13.44 15.7199 13.8975 14.7674 13.3725L13.3199 12.5625C13.1999 12.495 13.1249 12.3675 13.1249 12.2325V6.7425C13.1249 4.8375 11.5724 3.285 9.66738 3.285H6.61488C6.33738 3.285 6.14238 2.9925 6.26988 2.7525C6.65988 2.01 7.43988 1.5 8.33238 1.5H14.1674C15.4499 1.5 16.4999 2.55 16.4999 3.8325Z" fill="currentColor"/>
<path d="M9.6675 4.41016H3.8325C2.55 4.41016 1.5 5.46016 1.5 6.74266V15.2627C1.5 16.3502 2.28 16.8077 3.2325 16.2827L6.18 14.6402C6.495 14.4677 7.005 14.4677 7.32 14.6402L10.2675 16.2827C11.22 16.8077 12 16.3502 12 15.2627V6.74266C12 5.46016 10.95 4.41016 9.6675 4.41016ZM8.25 9.56266H7.3125V10.5002C7.3125 10.8077 7.0575 11.0627 6.75 11.0627C6.4425 11.0627 6.1875 10.8077 6.1875 10.5002V9.56266H5.25C4.9425 9.56266 4.6875 9.30766 4.6875 9.00016C4.6875 8.69266 4.9425 8.43766 5.25 8.43766H6.1875V7.50016C6.1875 7.19266 6.4425 6.93766 6.75 6.93766C7.0575 6.93766 7.3125 7.19266 7.3125 7.50016V8.43766H8.25C8.5575 8.43766 8.8125 8.69266 8.8125 9.00016C8.8125 9.30766 8.5575 9.56266 8.25 9.56266Z" fill="currentColor"/>
</svg>
    </>
  );
};

const icons = { Home, Soccer, Basketball, Tennis, MMA, Icehockey, ArrowDown, ArrowUp, ArrowLeft, ArrowRight, Live, Favourite, Search, EmptyWallet , Bets, Close, SaveAdd};
export default icons;
