import React from "react";
import Icon_circle from "./img/circle.png";
import Icon_triangle from "./img/triangle.png";
import Icon_square from "./img/square.png";
import Icon_right from "./img/Rightpic.png";
import Icon_left from "./img/Leftpic.png";
import Imagelist from "./Imagelist";

import Toppinginfo from "./Topping_info";

export default class Topping_List extends React.Component {
  //コンストラクタ
  constructor(props) {
    super(props);
    this.change_select_img = this.change_select_img.bind(this);
    this.onMouseMove_SetState = this.onMouseMove_SetState.bind(this);
    this.cloneObj = this.cloneObj.bind(this);
    this.change_Icon = this.change_Icon.bind(this);
    this.set_Icon = this.set_Icon.bind(this);
    this.change_img_index = this.change_img_index.bind(this);
    this.onDragMove_SetState = this.onDragMove_SetState.bind(this);
    this.change_d_flg = this.change_d_flg.bind(this);
    // let p = document.getElementById("Pizza_id");

    console.log("const:Topping_List");

    this.state = {
      select_img: "", //現在選択しているトッピングの画像用文字列
      //初期表示の位置（後で調整できるようにする。）
      x_posi: "-999px", //
      y_posi: "412px", //

      d_flg: false
    };
  }

  componentDidMount() {
    // let p = document.getElementById("Doughfnc_id");
    // //
    // console.log("conponentdidm:Topping_List");
    // console.log(p.getBoundingClientRect());
    // //getBoundingClientRect
  }

  change_d_flg(flg) {
    console.log("drag_flg");
    if (flg === true) {
      this.setState({ d_flg: false });
    } else {
      this.setState({ d_flg: true });
    }
  }

  // 現在選択しているトッピングの画像の位置をカーソルに合わせる。
  onMouseMove_SetState(event) {
    // （要修正）ーーーーーーーーーー
    // カーソルの位置調整を調整する必要あり
    let x = event.clientX;
    let y = event.clientY;
    let selecting_target = event.target;
    let width = selecting_target.offsetWidth;
    let height = selecting_target.offsetHeight;
    let x_posi_tmp = x - width / 2 + "px";
    let height_tmp = y - height / 2;
    if (height_tmp < 600) {
      //height_tmp = height_tmp + 600;
    }
    let y_posi_tmp = height_tmp + "px";

    if (y - width / 2 < 600) {
      //y_posi_tmp = y - height / 2 + 600 + "px";
    }
    // ーーーーーーーーーーーーーーー

    // state更新
    this.setState({
      x_posi: x_posi_tmp,
      y_posi: y_posi_tmp
    });
    event.preventDefault();
  }

  // 現在選択しているトッピングの画像の位置をカーソルに合わせる。(Drag版)
  onDragMove_SetState(event) {
    // （要修正）ーーーーーーーーーー
    // カーソルの位置調整を調整する必要あり
    let x = event.clientX;
    let y = event.clientY;
    let selecting_target = event.target;
    let width = selecting_target.offsetWidth;
    let height = selecting_target.offsetHeight;
    let x_posi_tmp = x - width / 2 + "px";
    let height_tmp = y - height / 2;
    if (height_tmp < 600) {
      //height_tmp = height_tmp + 600;
    }
    let y_posi_tmp = height_tmp + "px";

    if (y - width / 2 < 600) {
      //y_posi_tmp = y - height / 2 + 600 + "px";
    }
    // ーーーーーーーーーーーーーーー

    console.log("drag:" + x);
    // state更新
    this.setState({
      x_posi: x_posi_tmp,
      y_posi: y_posi_tmp,
      d_flg: true
    });

    event.preventDefault();
  }

  //トッピング画像をクローンを使用して複製したものを、管理用配列に追加することで画面に配置する
  cloneObj = function (event, range) {
    //onmousedownイベントに変更すること
    var click_obj = event.target; //クリックした要素をevent.targetで取得
    console.log("clone");

    var x = event.clientX;
    var y = event.clientY;

    var flg = true; //判定用のフラグ
    console.log(this.state.d_flg);
    if (this.state.d_flg === true) {
      alert("Dragging!");
    }

    // console.log(typeof x);
    // console.log(typeof range.dough_x_end);
    // ターゲットが指定の範囲外で固定されないように、引数で受け取った生地の有効範囲内かチェック
    if (x > range.dough_x_end || x < range.dough_x) {
      flg = false;
      console.log("can not clone bocause of x out of range!:" + x);
      console.log(" range is:" + range.dough_x + " - " + range.dough_x_end);
    }

    if (y > range.dough_y_end || y < range.dough_y) {
      flg = false;
      console.log("can not clone bocause of y out of range!:" + y);
      console.log(" range is:" + range.dough_y + " - " + range.dough_y_end);
    }

    if (flg === true) {
      var clone_obj = click_obj.cloneNode(true); //要素をクローンする

      this.props.update_fnc(clone_obj); //渡された関数を使用して管理用配列に画像ノードを追加
      //bind()はつけない

      // トッピングのクラスをアニメーション用のものに変更した後、数秒後に戻す
      const pre_classname_topping = click_obj.className;

      const resetfnc = () => {
        click_obj.className = pre_classname_topping;
        console.log("execute settimeout Topping stanped");
      };

      click_obj.className = "stanp_add";
      setTimeout(resetfnc, 1000);
    } else {
      // falseの場合はガイド用キャンバスのクラス（スタイル）を一時変更後、並列処理で元に戻す
      var guidecanvas = document.getElementById("review_wcanvas2");
      const pre_classname = guidecanvas.className;

      const resetfnc = () => {
        guidecanvas.className = pre_classname;
        console.log("execute settimeout Topping");
      };

      guidecanvas.className = "canv_add";
      setTimeout(resetfnc, 1000);
    }
  };

  // 選択したリスト内の画像とトッピング用オブジェクト（画像）を同じにする
  change_select_img(event) {
    let selecting_element = event.target; //ターゲット取得
    let selecting_img_src = selecting_element.src; //ターゲットの画像のsrcを取得
    let x = event.clientX;
    let y = event.clientY;
    y = y + 20;

    console.log("--click--");
    // ステート更新
    this.setState({
      select_img: selecting_img_src,
      x_posi: x + "px", //
      y_posi: y + "px" //
    });
  }

  // 引数で受け取ったトッピングの種類の変更用文字列に応じてリスト内画像を変更
  // 未使用の関数
  change_Icon() {
    let icon = this.props.guzai_img;
    console.log("--change icon--");

    if (icon === "veg") {
      return Object.values({ Icon_circle });
      //return { Icon_circle}.["Icon_circle"];
    } else if (icon === "meat") {
      return Object.values({ Icon_triangle });
      // return { Icon_triangle };
    } else if (icon === "cheese") {
      return Object.values({ Icon_square });
    } else {
      // let test = { type: "veg", num: 2 };
      // console.log(test);

      // var r = Pricelist(test);
      // console.log(r);

      // var result = r[1];
      return result;
    }

    //return(<imagefunc guzai_name={this.props.guzai_img} />)
  }

  set_Icon(col) {
    var icon = this.props.guzai_img; //現在のトッピングのタイプ
    var num = this.props.img_index; //トッピングタイプごとの画像インデックス
    console.log("--set icon--");
    var set_info_obj = { type: icon, num: num }; //画像のソース取得用の関数に渡す引数作成

    var set_src_obj = Imagelist(set_info_obj);
    // 画像のsrcオブジェクトから現在のタイプとインデックスに応じた配列（オブジェクトを取得）

    var result = set_src_obj[col]; //トッピング画像の列に応じた画像のソースをセットする。

    return result;
  }

  change_img_index = function () {
    var current_index = this.props.img_index;
    this.props.img_index_fnc(current_index);
  };

  render() {
    console.log("render--Topping_List");

    var style = {
      top: this.state.y_posi,
      left: this.state.x_posi,
      zIndex: 1000,
      position: "absolute"
    };

    var style_tbl = {
      top: "307",
      left: "612"
    };

    // var style_topping = {
    //   "background-image": "url(" + Object.values({ bcg_test2 }) + ") ",
    //   "background-size": "cover",
    //   // transform:"rotate(90deg)",
    //   margin: "0px 0px 0px 0px",
    //   position:"center",
    //   height:"100%",
    //   width:"100%",
    //   "background-repeat": "no-repeat"
    // };

    // console.log(this.props.guzai_img);

    return (
      <div>
        <div className="topping_img">
          <img
            src={Icon_left}
            alt=""
            width="20px"
            height="50px"
            className="add_border_b Img_select"
            onClick={() => this.props.img_index_fnc()}
            // 画像のインデックスを変更する関数を実施
          ></img>
          <img
            //src={this.change_Icon ? this.change_Icon : { Icon_circle }}
            // src={this.change_Icon()}
            src={this.set_Icon("1")}
            alt=""
            width="100px"
            height="100px"
            className="add_inner_border_b"
            onClick={this.change_select_img}
            // style={style_tbl}
            //onClick={(event) => this.change_select_img(event)}
          ></img>

          <img
            // src={this.change_Icon()}
            src={this.set_Icon("2")}
            alt=""
            width="100px"
            height="100px"
            className="add_inner_border_b"
            // onMouseMove={this.cloneObj}
            onClick={this.change_select_img}
          ></img>
          <img
            // src={this.change_Icon()}
            src={this.set_Icon("3")}
            alt=""
            width="100px"
            height="100px"
            className="add_inner_border_b"
            //onMouseMove={this.cloneObj}
            onClick={this.change_select_img}
          ></img>

          <img
            src={Icon_right}
            alt=""
            width="20px"
            height="50px"
            className="Img_select add_border_b"
            onClick={this.change_img_index}
          ></img>

          <img
            src={this.state["select_img"]}
            className=""
            id="move_topping"
            alt=""
            width="100px"
            height="100px"
            style={style}
            onClick={() => this.cloneObj(event, this.props.range)}
            onMouseMove={this.onMouseMove_SetState}
            // Drag処理
            // onDrag={this.onDragMove_SetState}
            onDrag={(event) => console.log(event.client)}

            // onDragExit={() => this.change_d_flg(false)}
            // onDragEnter={() => this.change_d_flg(true)}
            // onDragStart={() => this.change_d_flg(true)}
            // onDragEnd={() => this.change_d_flg(false)}

            //引数にエリア情報追加
          ></img>
        </div>
        <div className="topping_info_obj">
          <Toppinginfo
            topping_type={this.props.guzai_img}
            topping_page={this.props.img_index}
            selecting_topping={this.state["select_img"]}
          />
        </div>
      </div>
    );
  }
}
