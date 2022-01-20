import React from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
    </div>
  );
}

export default Preloader;
