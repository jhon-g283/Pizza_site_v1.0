import React from "react";
import Icon_mail from "./img/background/Mail2.png";
import Icon_name from "./img/background/Name.png";
import Icon_tel from "./img/background/Tel.png";
import Icon_address from "./img/background/Address.png";
import Icon_Post from "./img/background/Post.png";
import Icon_pack from "./img/background/Package1.png";
import Icon_Oppack from "./img/background/Opacitypac.png";

export default class Input_OrderInfo extends React.Component {
  constructor(props) {
    super(props);
    console.log("const PreviewCanvas");
    //close_fnc
    this.state = {
      flg: false, //確認画面の表示用フラグ
      mail: "test@", //入力フォーム：メールアドレス
      name: "test", //入力フォーム：名前
      address: "test", //入力フォーム：住所
      tel: "000", //入力フォーム：電話番号
      info_obj: [],
      canv_obj: {},
      img_style_s: "",
      val_check_flags: {
        //バリデーションチェック用フラグ
        mail: false, //入力フォーム：メールアドレス
        name: true, //入力フォーム：名前(空欄かどうかを見るので最初からTrue)
        address: true, //入力フォーム：住所(空欄かどうかを見るので最初からTrue)
        tel: false //入力フォーム：電話番号
      }
    };

    this.getforminfo = this.getforminfo.bind(this);
    this.Backbutton_function = this.Backbutton_function.bind(this);
    this.onChangeFunction = this.onChangeFunction.bind(this);
    this.clickOrder = this.clickOrder.bind(this);
    this.Onloadfunction = this.Onloadfunction.bind(this);
  }

  componentDidMount() {
    console.log("--componentDidMount PreviewCanvas--");
    var rev_canvas = document.getElementById("review_wcanvas");
    var camvas_rect = rev_canvas.getBoundingClientRect();
    var rev_width = camvas_rect.width;
    var rev_height = camvas_rect.height;
    var rev_left = camvas_rect.x;
    var rev_top = camvas_rect.y;

    rev_width = Math.round(rev_width);
    rev_height = Math.round(rev_height);
    rev_left = Math.round(rev_left);
    rev_top = Math.round(rev_top);
    //     var rev_context = rev_canvas.getContext("2d");

    console.log("rev_width:" + rev_width);
    console.log("rev_height:" + rev_height);
    console.log("rev_left:" + rev_left);
    console.log("rev_top:" + rev_top);
    console.log("rev_canvas" + rev_canvas.top);

    tmp = {
      width: rev_width,
      height: rev_height,
      left: rev_left,
      top: rev_top
    };

    console.log(rev_canvas);

    console.log(tmp);

    this.setState({ canv_obj: tmp });

    // if (flg === false) {
    //   var guidecanvas = document.getElementById("review_wcanvas2");
    //   const pre_classname = guidecanvas.className;

    //   const resetfnc = () => {
    //     guidecanvas.className = pre_classname;
    //     console.log("execute settimeout");
    //   };

    //   guidecanvas.className = "canv_add";
    //   setTimeout(resetfnc, 1000);
    // }
    //     var rev_imgdata = rev_context.getImageData(0,0,rev_width,rev_height);
    // // canvas_order_info
    // // review_wcanvas
    // console.log(this.props);

    // var canvas = document.getElementById("order_canvas");
    // var context = canvas.getContext("2d");
    // context.scale(0.5, 0.5);
    // canvas.width = rev_width;
    // canvas.height = rev_height;

    // var range_obj2 = this.props.range;
    // var img_x = parseInt(range_obj2.d_img_x, 10); //
    // var img_y = parseInt(range_obj2.d_img_y, 10); //

    // var all_topping = this.props.topping;
    // console.log(all_topping);

    // for (const i of all_topping.values()) {
    //   let x = i.style.left;
    //   // 横情報計算
    //   x = x.replace("px", "");
    //   x = parseInt(x, 10);

    //   x = x - img_x;
    //   // console.log("x:" + x);
    //   // 縦情報取得
    //   let y = i.style.top;
    //   y = y.replace("px", "");
    //   y = parseInt(y, 10);

    //   y = y - img_y;

    //   // console.log("y:" + y);
    //   // 描画実施
    //   context.drawImage(i, x, y, i.width / 2, i.height);
    // }

    // // topping
    //     context.putImageData(rev_imgdata,0,0)
    // review_wcanvas
    // console.log(rev_imgdata);
    // console.log(canvas);
  }

  // 確認ボタン押下時の処理
  getforminfo() {
    console.log("--getforminfo--");
    // フォーム内容の取得
    var form_val = document.forms["input_info"];
    var mail_info = "mail:" + form_val["mail"].value;
    var tel_info = "tel:" + form_val["tel"].value;
    var address_info = "address:" + form_val["address"].value;
    var name_info = "name:" + form_val["name"].value;

    var flg_check = this.state.val_check_flags;
    // console.log(flg_check);

    for (const i of Object.values(flg_check)) {
      console.log(i);
      if (i === true) {
        alert("入力に不備があります。");
        return;
      }
    }

    var tmp = {
      mail: mail_info,
      tel: tel_info,
      address: address_info,
      name: name_info
    };

    // console.log(tmp);
    // console.log("mail:" + mail);

    this.setState({
      flg: true,
      info_obj: tmp
    });

    // console.log(this.state);
  }

  Onloadfunction(event) {
    console.log("---function Onloadfunction--");
    console.log(event.target);

    var img_element = event.target;
    const new_classname = "package_close package_clsose_pre";
    // console.log(pre_classname);

    const resetfnc = () => {
      img_element.className = new_classname;
      console.log("execute settimeout");
    };
    // guidecanvas.className = "canv_add";

    setTimeout(resetfnc, 1000);

    // img_style
    // var tmp = { transform: "scale(-1, 1)" };
    var tmp = "scale(-1, 1)";
    this.setState({ img_style_s: tmp });
    console.log(this.setState.img_style_s);
  }

  //戻るボタンの処理
  Backbutton_function() {
    console.log("--Backbutton_function--");
    this.setState({ flg: false }); //フラグを更新
  }

  //Formの編集時の表示用関数
  // ReactはInputタグのValueの制御を取ってしまうようなのでOnChangeのコールバックで常にこの関数を実施させる
  // 引数：input_tag・・入力してるテキストボックスの種類
  onChangeFunction(event, input_tag) {
    var tmp = event.target.value; //入力しているEvent（タグ）の値
    var reg;
    var match_result;
    var tmp_flgs = this.state.val_check_flags;

    // テキストボックスの種類に応じて更新するステートを切り替える。
    if (input_tag === "name") {
      if (tmp === "") {
        tmp_flgs.name = true;
      } else {
        tmp_flgs.name = false;
      }

      this.setState({ name: tmp, val_check_flags: tmp_flgs });
    } else if (input_tag === "mail") {
      reg = /[^0-9^a-z^A-Z^\.\-@]/;
      match_result = tmp.match(reg);

      if (match_result === null) {
        tmp_flgs.mail = false;
      } else {
        tmp_flgs.mail = true;
      }

      this.setState({ mail: tmp, val_check_flags: tmp_flgs });
    } else if (input_tag === "tel") {
      reg = /[^0-9^\-]/;
      match_result = tmp.match(reg);

      if (match_result === null) {
        tmp_flgs.tel = false;
      } else {
        tmp_flgs.tel = true;
      }

      this.setState({ tel: tmp, val_check_flags: tmp_flgs });
    } else if (input_tag === "address") {
      if (tmp === "") {
        tmp_flgs.address = true;
      } else {
        tmp_flgs.address = false;
      }

      this.setState({ address: tmp, val_check_flags: tmp_flgs });
    }
    console.log(this.state.val_check_flags);
  }

  // 注文確定ボタンの処理
  clickOrder() {
    console.log("---functon clickOrder--");
    var alt = confirm("注文を確定しますか？");
    if (alt) {
      console.log("---Order OK--");
      // Appの編集モードの切り替え用関数を実施
      this.props.close_fnc();
      // Appのリセット用関数を実施
      this.props.reset_fnc("order");
    } else {
      console.log("---Order Canceled--");
      // キャンセル時は戻るボタン用の関数実施
      this.Backbutton_function();
    }
    console.log("---functon clickOrder end--");
  }

  render() {
    console.log("--render PreviewCanvas--");

    var info = []; //確認画面用の要素を入れる配列
    var tmp_obj = this.state.info_obj; //入力内容を取得
    // console.log(tmp_obj);
    // var len = Object.keys(tmp_obj).length;
    // console.log(len);

    // 入力内容のオブジェクトからループで確認用の画面で使う要素を作成
    for (const [key, value] of Object.entries(tmp_obj)) {
      // console.log(value);
      let tag = (
        <div>
          <p>{value}</p>
        </div>
      );
      info.push(tag); //配列にプッシュ
    }

    // 確認用画面表示のフラグがTrueなら表示する。
    info = this.state.flg ? <div>{info}</div> : "";

    var img_style = {};
    var top = "";
    var left = "";
    var width = "";
    var height = "";
    var img_class = "";

    left = this.state.canv_obj.left;
    top = this.state.canv_obj.top;
    width = this.state.canv_obj.width;
    height = this.state.canv_obj.height;
    left = left + width / 2;
    height = height / 2;
    width = width / 2;
    img_style = {
      top: top,
      left: left,
      width: width,
      height: height,
      position: "absolute"
      // backgroundColor: "white"
    };

    console.log(img_style);
    console.log(this.state.img_style_s);
    // var clone_canvas = rev_canvas.cloneNode()

    // 入力フォームの決定ボタン
    var input_button = (
      <div className="form_class">
        <b>入力完了：</b>
        <button onClick={this.getforminfo}>Go!!</button>
      </div>
    );
    // 確認画面の戻るボタン
    var back_button = (
      <button className="check_buttons" onClick={this.Backbutton_function}>
        内容を修正する
      </button>
    );
    // 確認画面の決定ボタン
    var order_button = (
      <button className="check_buttons" onClick={this.clickOrder}>
        注文する
      </button>
    );

    var check_style = {
      "background-color": "white",
      margin: "0px 5%",
      "background-image": "url(" + Object.values({ Icon_Post }) + ") ",
      "background-size": "100% 100%"
    };

    var check_class = "check_class";
    var input_order = "input_order";

    if (this.state.flg === true) {
      check_class = "check_class input_add_animation2";
      img_class = "test_border_1 package_clsose_pre";

      // var t = this.state.img_style_s;
      // if (t !== "") {
      //   var test = img_style;
      //   // test.transform = t;
      //   // var test2 = {
      //   //   "transition-duration": "1s",
      //   //   transform: "scale(-1, 1)",
      //   //   // transform: scale3d(1, 1, 1);
      //   //   "transform-origin": "left",
      //   //   top: top,
      //   //   left: left,
      //   //   position: "absolute"
      //   // };
      //   // test.transition-duration="1s";
      //   // img_style = test2;
      // }

      // console.log(img_style);
      // console.log(check_class);
    } else {
      input_order = "input_order input_add_animation";
      img_class = "package_reverse";
      console.log(input_order);
    }

    // 確認画面の表示要素
    var order_check = (
      <div>
        <div className={check_class}>
          <p>注文確認</p>
          <div className="" style={check_style}>
            {info}
          </div>
          <div className="check_buttons ">
            {back_button}
            {order_button}
          </div>
        </div>
        <img
          onLoad={this.Onloadfunction}
          src={Icon_pack}
          className={img_class}
          style={img_style}
          alt=""
        ></img>
      </div>
    );

    var pic_style = { margin: "0px 0px -2px 0px", padding: "0px 0px 0px 0px" };

    // 入力フォーム、入力部分作成
    var input_elements = (
      <div className="">
        <form name="input_info">
          <div className="form_class">
            {/* <b>name:</b> */}
            <img
              src={Icon_name}
              width="50px"
              height="20px"
              style={pic_style}
              alt=""
            ></img>
            <input
              type="text"
              name="name"
              className="tbox"
              value={this.state.name}
              onChange={() => this.onChangeFunction(event, "name")}
            ></input>
            {this.state.val_check_flags.name === true ? (
              <p className="error_msg">
                {" "}
                <span className="text_alert">!!</span> お名前を入力してください
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="form_class">
            {/* <b>mail:</b> */}
            <img src={Icon_mail} width="50px" height="20px" alt=""></img>

            <input
              type="text"
              name="mail"
              className="tbox"
              value={this.state.mail}
              onChange={() => this.onChangeFunction(event, "mail")}
            ></input>
            {this.state.val_check_flags.mail === true ? (
              <p className="error_msg">
                {" "}
                <span className="text_alert">!!</span>半英数 @ドメイン{" "}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="form_class">
            {/* <b>tel:</b> */}
            <img
              src={Icon_tel}
              width="50px"
              height="20px"
              style={pic_style}
              alt=""
            ></img>

            <input
              type="text"
              name="tel"
              className="tbox"
              value={this.state.tel}
              onChange={() => this.onChangeFunction(event, "tel")}
            ></input>
            {this.state.val_check_flags.tel === true ? (
              <p className="error_msg">
                {" "}
                <span className="text_alert">!!</span> 半英数 -(ハイフン){" "}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="form_class">
            {/* <b>address:</b> */}
            <img
              src={Icon_address}
              width="50px"
              height="20px"
              style={pic_style}
              alt=""
            ></img>

            <input
              type="text"
              name="address"
              className="tbox"
              value={this.state.address}
              onChange={() => this.onChangeFunction(event, "address")}
            ></input>
            {this.state.val_check_flags.address === true ? (
              <p className="error_msg">
                <span className="text_alert">!!</span> 住所を入力してください
              </p>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    );

    // className !!

    //入力フォームの要素
    var forms = (
      <div className={input_order}>
        {/* <canvas id="order_canvas"></canvas> */}
        <div>{input_elements}</div>
        <div>{input_button}</div>
        <div className="package_reverse2">
          <img
            src={Icon_Oppack}
            // onLoad={this.Onloadfunction(event)}
            className={img_class}
            style={img_style}
            alt=""
          ></img>
        </div>
      </div>
    );

    var result;
    // 確認画面のフラグなら確認画面、それ以外なら入力画面を表示
    if (this.state.flg === false) {
      // return result;
      result = forms;
    } else {
      // return order_check;
      result = order_check;
    }

    return result;
  }
}
