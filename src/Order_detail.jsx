import React from "react";
import bord2 from "./img/background/Bord2.png";
import bord4 from "./img/background/Bord4.png";

import { getpriceobj } from "./PriceList";

//合計と具材の内訳の一覧よう
export default function OrderDetail(props) {
  let sum_price = 0;
  var ing_obj = props.Ingredients_info;
  let array_ing = [];
  let array_ing_total = [];
  let tmp;

  var bcg_style = {
    "background-image": "url(" + Object.values({ bord4 }) + ") ",
    "background-size": "55% 100%",
    "background-repeat": "no-repeat",
    "background-position": "center"
    // "background-color": "white"
  };

  console.log("--function--- OrderDetail");
  console.log(ing_obj);

  for (let v in ing_obj) {
    console.log("index:" + v);
    console.log("val1:" + ing_obj[v]["price"]);
    sum_price += ing_obj[v]["price"];
    tmp = ing_obj[v]["name"];
    // console.log(getpriceobj);

    let tmp_ayyay = array_ing.find((element) => element === tmp);

    if (tmp_ayyay === undefined) {
      console.log("push---");
      let tmp_insert = { name: tmp, total_price: ing_obj[v]["price"] };
      array_ing.push(ing_obj[v]["name"]);
      array_ing_total.push(tmp_insert);
      console.log(array_ing);
      console.log(array_ing_total);
    } else {
      for (const i of array_ing_total.keys()) {
        if (array_ing_total[i]["name"] === tmp) {
          array_ing_total[i]["total_price"] += ing_obj[v]["price"];
        }
      }
    }
  }

  var result = <div>合計：{sum_price}</div>;

  var details;

  console.log("--");
  const result_map = array_ing_total.map((element, index) => {
    var returnelement = (
      <li className="ing_detail_list" style={bcg_style}>
        {element.name} : {element.total_price}
      </li>
    );

    return returnelement;
  });

  // console.log(details);
  details = <div>{details}</div>;

  result = (
    <div>
      <div className="ing_detail_sum">{result}</div>

      {result_map}
    </div>
  );

  return result;
}
