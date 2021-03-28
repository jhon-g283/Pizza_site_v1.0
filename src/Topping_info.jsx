import React from "react";

import { getpriceobj } from "./PriceList";

export default function Toppinginfo(props) {
  var result = "test topping";

  console.log("---function Toppinginfo--");
  console.log(props);

  var type = props.topping_type;
  var img_src = props.selecting_topping;
  var page = props.topping_page;

  var topping_names = { veg: "野菜", meat: "肉", cheese: "チーズ" };
  var selecting_type = topping_names[type];
  var name;
  var price;

  if (selecting_type === undefined) {
    selecting_type = "test";
  }
  var result = (
    <div>
      {selecting_type} {page} ページ目{" "}
    </div>
  );

  var selecting_topping_info = getpriceobj(img_src);

  if (img_src !== "") {
    name = selecting_topping_info["name"];
    price = selecting_topping_info["price"];

    var info = (
      <div>
        <div>-選択中-</div>
        <div>トッピング名:{name}</div>
        <div>値段（１個）:{price}¥</div>
      </div>
    );
    result = (
      <div>
        {result} {info}
      </div>
    );
  } else {
    var info = (
      <div>
        <div>-トッピングを選択してください-</div>
        <div>両端の切り替えボタンで次のページへ</div>
        <div>メニューバーから種類を変更できます。</div>
      </div>
    );
    result = (
      <div className="">
        {result} {info}
      </div>
    );
  }

  // console.log(img_src);
  console.log("selecting_topping_info");
  // console.log(selecting_topping_info);
  // console.log(name);
  // console.log(price);

  return result;
}
