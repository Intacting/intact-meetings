import React from "react";
const ButtonBold = (props) => {
  return (
    <>
      <span>
        <a
          className="button-bold"
          style={{
            minHeight: `${props.minheight}`,
            padding: `${props.padding}`,
            fontSize: `${props.fontSize}`,
            margin: `${props.margin}`,
            width: `${props.width}`,
          }}
          href={props.href}
        >
          <span className=" w-100">{props.name}</span>
        </a>
      </span>
    </>
  );
};
export default ButtonBold;
