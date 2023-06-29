import React from "react";
import { Spinner } from "./Spinner";

import "../css/loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <span><Spinner /></span>
    </div>
  );
};

export default Loader;
