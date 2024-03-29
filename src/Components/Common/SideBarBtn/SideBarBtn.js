import React from "react";

const SideBarBtn = (props) => {
  const { show, setShow } = props;

  const showClass = () => {
    setShow(!show);
  };
  return (
    <div
      style={{ cursor: "pointer" }}
      className="side-bar-btn-2"
      onClick={showClass}
    >
      <i className={show ? "fas fa-chevron-down" : "fas fa-chevron-right"}></i>
    </div>
  );
};

export default SideBarBtn;
