import React from "react";
const ButtonLight = (props) => {
  return (
    <>
      <span>
        <a className="button-light">
          <span className=" w-100">{props.name}</span>
        </a>
      </span>
    </>
  );
};
export default ButtonLight;
