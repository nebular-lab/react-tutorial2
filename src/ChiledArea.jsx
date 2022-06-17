import React from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "yellow"
};
export const ChiledArea = (props) => {
  console.log("子コンポーネントがレンダリングされた");
  const { open } = props;
  const data = [...Array(2000).keys()];
  data.forEach((element) => {
    console.log(element);
  });
  console.log(data);
  return (
    <>
      {open ? (
        <div>
          <p style={style}>チャイルド</p>
        </div>
      ) : null}
    </>
  );
};
