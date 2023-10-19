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
      sleep(500);
    }
  }
}

function shutdown() {
  console.log("服务退出");
  back();
  sleep(500);
  back();
  sleep(500);
  home();

  sleep(100);

  lockScreen();
  // Power();
}

unlock();

app.launchPackage("com.taobao.etao");
  sleep(5000);

if (text("签到领钱").exists()) {
  console.log("点击签到领钱");
  click(534, 354);

  sleep(2000);

  console.log("点击签到");
  click(396, 371);

  sleep(2000);
}

shutdown();