import React from "react";

import ModalOne from "./PopOver/ModalOne";
import ModalTwo from "./PopOver/ModalTwo";

const ModalManager = ({ closeFn, modal = "" }) => {
  return (
    <>
      <ModalOne closeFn={closeFn} open={modal === "modal-one"} />
      <ModalTwo closeFn={closeFn} open={modal === "modal-two"} />
    </>
  );
};

export default ModalManager;
