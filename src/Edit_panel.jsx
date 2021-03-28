import React from "react";
import bord1 from "./img/background/Bord1.png";
import bord2 from "./img/background/Bord2.png";
import bord4 from "./img/background/Bord4.png";

export default function Edit_panel(props) {
  console.log("--function-- Editp_anel");
  console.log(props);

  var current = props.current_cnt;
  var max = props.max_index_cnt;
  var flg = false;
  var fnc = () => {
    console.log("--can not click forward--");
    console.log("max_index:" + max);
  };

  var bcg_style = {
    "background-image": "url(" + Object.values({ bord4 }) + ") ",
    "background-size": "30% 100%",
    "background-repeat": "no-repeat",
    "background-position": "center"
    // "background-color": "white"
  };

  var back_class = "";

  if (current == max) {
    flg = true;
    if (max == 0) {
      back_class = "font_block";
    }
  }

  const edit_node = (
    <div className="edit_p1">
      <div>
        <li
          className={back_class}
          onClick={() => props.click_fnc("back")}
          style={bcg_style}
        >
          <span className="edit_add_border">戻る</span>
        </li>
        {flg ? (
          <li onClick={fnc} className="font_block">
            進む
          </li>
        ) : (
          <li onClick={() => props.click_fnc("forward")} style={bcg_style}>
            <span className="edit_add_border"> 進む</span>
          </li>
        )}
      </div>
      <li onClick={() => props.reset_fnc("reset")} style={bcg_style}>
        <span className="edit_add_border">リセット</span>
      </li>
    </div>
  );

  return edit_node;
}
