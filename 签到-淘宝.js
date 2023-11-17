"auto";
var common = require("common.js");

common.skeleton(
  "com.taobao.taobao",
  10,
  1500,
  function () {
    console.log("点击签到");
    click(32, 131);
    sleep(3000);

    if (className("android.widget.Button").text("立即提现").exists()) {
      console.log('弹层点击"立即提现"');
      className("android.widget.Button").text("立即提现").click();
      sleep(3000);

      if (className("android.widget.TextView").text("提现成功").exists()) {
        console.log("弹层提现成功，点击关闭");
        click("关闭");
        sleep(5000);
      }
    }

    if (className("android.widget.Button").text("去使用").exists()) {
      console.log("关闭浏览红包弹层");
      click("关闭");
      sleep(2000);
    }

    // ------------------------------------

    if (className("android.widget.Button").text("点击领取").exists()) {
      console.log("点击领取");
      click("点击领取");
      sleep(3000);
    }

    var clicked = click("赚元宝");
    console.log("赚元宝-去搜索");
    if (clicked) {
      sleep(1000);
      var searchBtnClicked = click("去搜索");
      if (searchBtnClicked) {
        sleep(1000);
        setText("猎装夹克");
        sleep(1000);
        click("搜索");
        sleep(3000);

        for (var i = 0; i < 12; i++) {
          console.log("滑(" + (i + 1) + "/12)次");
          swipe(900, 2000, 900, 1000, 2000);
          sleep(1500);
        }

        console.log("回签到主页");
        back();
        sleep(2000);
        back();
        sleep(2000);
        back();
        sleep(2000);
        
        click("去使用");
        sleep(3000);
      }
    }

    for (var i = 0; i < 3; i++) {
      console.log("赚元宝-逛精选好货赚元宝(" + (i + 1) + "/3)");
      var clicked = click("赚元宝");
      if (clicked && !text("逛精选好货赚元宝(3/3)").exists()) {
        textStartsWith("逛精选好货赚元宝").click();
        sleep(3000);
        while (true) {
          swipe(900, 2000, 900, 1000, 2000);
          sleep(1000);

          if (
            className("android.widget.TextView")
              .textStartsWith("任务完成，")
              .exists()
          ) {
            console.log("浏览完成");
            break;
          }
        }

        console.log("回签到主页");
        back();
        sleep(2000);

        if (textStartsWith("恭喜获得浏览红包").exists()) {
          console.log("关闭恭喜获得浏览红包");
          back();
        }
      }
    }
  },
  2,
  null
);
