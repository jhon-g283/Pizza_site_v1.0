import React from "react";

// 具材の表示用の関数コンポーネント
// ノードを入れた配列を引数で受け取って、Map関数で画像を要素の塊にして返却する。
export default function ToppingView(props) {
  console.log("--function-- ToppingView");

  var stop_index = props.viewing_index;
  // console.log(props.range);
  const p_dough_range = props.range;
  const map_array = props.img_array.map((element, index) => {
    if (stop_index <= index) {
      // console.log("return");
      return;
    }

    let element_style = {
      zIndex: 1000,
      position: "absolute",
      top: element.style.top,
      left: element.style.left
    };

    let img_element = (
      <img
        className="not_moving"
        draggable="false"
        src={element.src}
        alt={element.alt}
        width={element.width}
        height={element.height}
        style={element_style}
        onMouseMove={() => props.move_fnc(event, p_dough_range)}
        onClick={() => props.click_fnc(event, p_dough_range)}
        //style={element.style}
        // onMouseMove={this.cloneObj}
        // onClick={this.change_select_img}
      ></img>
    );

    return img_element;
  });

  return map_array;
}
