"auto";

function unlock() {
  if (!device.isScreenOn()) {
    device.wakeUp();
    sleep(500);
    swipe(500, 2000, 500, 1200, 500);
    sleep(500);
    var password = "134416";
    for (var i = 0; i < password.length; i++) {
      var p = text(password[i].toString()).findOne().bounds();
      click(p.centerX(), p.centerY());
      sleep(100);
    }
  }
}

unlock();

var isStarted = app.launchPackage("com.tencent.mm");
sleep(5000);
if (isStarted) {
  id("jha").waitFor();
  id("jha").findOne().click();
  sleep(1000);
  setText("南京银行");
  sleep(1000);
  click("南京银行N Card");
  sleep(5000);
  // 点击公众号首页“我的N世界”
  click(527, 1954);
  sleep(8000);
  // 点击"立即签到"，需消费，否则禁用状态
  click(540, 2049);
  sleep(2000);
  // 点击"N豆"
  click(331, 1032);
  sleep(2000);

  // 关闭小程序
  click(1006, 160);
  sleep(500);
  back();
  sleep(500);
  back();
  sleep(500);
  home();
  sleep(500);
  lockScreen();
}