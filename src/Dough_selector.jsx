// ヘルプ用のポップアップ
// スタイルはCSSで固定の値にさせる。

import React from "react";
//
import Icon_right from "./img/right.png";
import Icon_left from "./img/left.png";

import Icon_Dough1 from "./img/dough/Dough1.png";
import Icon_Dough2 from "./img/dough/Dough2.png";
import Icon_Dough3 from "./img/dough/Dough3.png";

//
import Icon_circle from "./img/circle.png";
import Icon_triangle from "./img/triangle.png";
import Icon_square from "./img/square.png";

//Help用の画像が必要
//
//

export default class HelpPopup extends React.Component {
  constructor(props) {
    super(props);
    //クローズ用にAppのフラグを変える関数が必要
    //
    this.change_page = this.change_page.bind(this);
    this.set_img_src = this.set_img_src.bind(this);
    this.Update_Dough_src = this.Update_Dough_src.bind(this);
    this.dough_info = this.dough_info.bind(this);

    this.state = {
      page: 1 //ヘルプ用のページ番号
    };
  }

  // ページ更新用関数
  change_page(flg) {
    console.log("--function change_page--");

    var tmp = this.state.page;

    if (flg === true) {
      tmp = tmp + 1;
      console.log(tmp);

      if (tmp === 4) {
        tmp = 1;
      }
    } else {
      tmp = tmp - 1;
      console.log(tmp);
      if (tmp === 0) {
        tmp = 3;
      }
    }

    this.setState({ page: tmp });
  }

  // ページに応じて画像のsrcを返却
  set_img_src(page_n) {
    console.log("--function set_img_src--");
    var src;
    var img_obj;
    if (page_n === 1) {
      img_obj = { Icon_Dough1 };
    } else if (page_n === 2) {
      img_obj = { Icon_Dough2 };
    } else if (page_n === 3) {
      img_obj = { Icon_Dough3 };
    } else if (page === 4) {
      img_obj = { Icon_square };
    } else {
      img_obj = { Icon_Dough1 };
    }

    src = Object.values(img_obj);
    console.log(src);
    return src;
  }

  // 生地の説明文を取得する関数
  dough_info(page_n) {
    console.log("--function dough_info --");

    var explain = "";
    if (page_n === 1) {
      explain = "もっちり食感の生地";
    } else if (page_n === 2) {
      explain = "こんがりパリパリ生地";
    } else if (page_n === 3) {
      explain = "ふわふわみみつき生地";
    } else if (page === 4) {
      explain = "ex4";
    } else {
      explain = "";
    }

    console.log("page:" + page_n + " explain:" + explain);

    return explain;
  }

  Update_Dough_src(event) {
    console.log("--function Update_Dough_src--start");

    var target = event.target;
    var src = target.src;

    // console.log(this.props);
    this.props.change_dough(src); //生地のsrcを更新
    this.props.close_fnc(); //ポップアップをクローズ

    console.log("--function Update_Dough_src--end");
  }

  render() {
    console.log("render Dough_selector");

    const closebtn = (
      <div>
        <p className="close_btn" onClick={this.props.close_fnc}>
          close x
        </p>
      </div>
    );
    const help_messsage = (
      <div>
        <p>ピザに使う生地を選んでください</p>
      </div>
    );
    var page = this.state.page;
    var explain = this.dough_info(page);

    // ヘルプ用の画像
    const help_img = (
      <div>
        <img
          src={this.set_img_src(page)}
          onClick={() => this.Update_Dough_src(event)}
          className="Dough_img help_img"
          alt=""
          width="50%"
          height="50%"
        ></img>
      </div>
    );
    // ヘルプの切り替え用画像：左
    const help_img_change_left = (
      <img
        src={Icon_left}
        className="Img_select add_border_b"
        onClick={() => this.change_page(false)}
        alt=""
        width="20px"
        height="50px"
      ></img>
    );
    // ヘルプの切り替え用画像：右
    const help_img_change_right = (
      <img
        src={Icon_right}
        onClick={() => this.change_page(true)}
        className="Img_select add_border_b"
        alt=""
        width="20px"
        height="50px"
      ></img>
    );

    const return_img = (
      <div className="">
        {help_img_change_left}
        <a className="msg_change">画像をクリックして選択</a>
        {help_img_change_right}
      </div>
    );

    const result = (
      <div>
        <div className="help_menu">
          <div>{closebtn}</div>
          <div>{help_messsage}</div>
          {page}:{explain}
          {help_img}
          {return_img}
        </div>
        <div className="help_menu2"></div>
      </div>
    );

    return result;
  }
}
