import React from "react";
import Icon_dough from "./img/dough/dough.png";
import Icon_bkg from "./img/background/Manaita.png";

export default function Dough_fnc(props) {
  //（要修正）propsで画像を変更する

  console.log("--function-- Dough_fnc");
  console.log(props.dough_src);

  var src = Object.values({ Icon_bkg });

  var img_src = props.dough_src;

  if (img_src === "") {
    img_src = { Icon_dough };
  }

  var style = {
    "background-image": "url(" + src + ") ",
    "background-size": "100% 100%",
    "background-repeat": "no-repeat",
    "border-radius": "40px 40px 40px 40px"
  };
  console.log(style);
  const dough_img = (
    <img
      // src={Icon_dough}
      src={img_src}
      alt=""
      width="70%"
      id="Dough_img2"
      className=" test_border_1"
      style={style}
    ></img>
  );

  return dough_img;
}
