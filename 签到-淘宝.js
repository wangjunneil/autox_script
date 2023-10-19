"auto";

function unlock() {
  if (!device.isScreenOn()) {
    device.wakeUp();
    sleep(500);
    swipe(540, 2000, 540, 1200, 500);
    sleep(500);
    var password = "134416";
    for (var i = 0; i < password.length; i++) {
      var p = text(password[i].toString()).findOne().bounds();
      click(p.centerX(), p.centerY());
      sleep(200);
    }

    sleep(3000);
  }
}

function shutdown() {
  back();
  sleep(500);
  back();
  sleep(500);
  back();
  sleep(500);
  home();
  sleep(100);
  lockScreen();
}

unlock();

// ------------------------
console.show(true);
console.setSize(device.width / 2, 300);
console.setPosition(10, 1000);
console.log("打开");
var isStarted = app.launchPackage("com.taobao.taobao");
sleep(5000);

if (isStarted) {
  console.log("点击签到");
  click(32, 131);
  sleep(3000);

  console.log("点击领取");
  click("点击领取");
  sleep(2000);

  // 赚元宝-去逛逛-3次
  // for (var i = 0; i < 3; i++) {
  //   console.log("i=" + i);
  //   click("赚元宝");
  //   console.log("i=" + i);
  //   var isGuangClicked = className("android.widget.Button")
  //     .text("去逛逛")
  //     .findOne()
  //     .click();
  //   console.log("i=" + i);
  //   if (isGuangClicked) {
  //     console.log("点击赚元宝-去逛逛 " + (i + 1));
  //     for (var i = 0; i < 30; i++) {
  //       swipe(540, 2000, 540, 1000, 800);
  //       sleep(500);
  //     }
  //     back();
  //     sleep(2000);
  //   } else {
  //     break;
  //   }
  // }

  // click("赚元宝");
  // sleep(1000);
  // click("去搜索");
  // sleep(1000);
  // click(224, 719);
  // for (var i = 0; i < 10; i++) {
  //   swipe(540, 2000, 540, 1000, 800);
  //   sleep(500);
  // }
  // sleep(1000);
  // back();
  // back();
} else {
  console.error("打开失败");
  home();
  sleep(100);
  lockScreen();
}