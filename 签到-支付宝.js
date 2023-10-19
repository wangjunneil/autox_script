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
      sleep(500);
    }

    sleep(3000);
  }
}

unlock();

// ------------------------
var isStarted = app.launchPackage("com.eg.android.AlipayGphone");
sleep(3000);

if (isStarted) {
  click("Enter Alipay");
  sleep(3000);

  click("Me");
  sleep(3000);

  click(756, 539);
  sleep(3000);

  click("Get All");
  sleep(3000);

  className("android.widget.TextView").text("Daily Sign-in").waitFor();
  className("android.widget.TextView").text("Daily Sign-in").findOne().click();

  sleep(3000);

  back();
  sleep(500);
  back();
  sleep(1000);

  click(0, 2238);
  sleep(1000);

  back();
  sleep(500);
  home();
  sleep(100);
  lockScreen();
}