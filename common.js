module.exports = {
  stopOtherRunningScript: function () {
    console.log("关闭其他运行脚本");
    engines.all().map((ScriptEngine) => {
      if (engines.myEngine().toString() !== ScriptEngine.toString()) {
        ScriptEngine.forceStop();
      }
    });
  },
  unLockPhone: function () {
    if (!device.isScreenOn()) {
      device.wakeUp();
      sleep(500);
      swipe(500, 2000, 500, 1000, 210);
      sleep(500);
      var password = "134416";
      for (var i = 0; i < password.length; i++) {
        var p = text(password[i].toString()).findOne().bounds();
        click(p.centerX(), p.centerY());
        sleep(200);
      }
    }
  },
  startApp: function (pgName, consoleX, consoleY) {
    console.show(true);
    console.setSize(300, 200);
    console.setPosition(consoleX, consoleY);
    console.setBackgroud("#000000");

    device.keepScreenOn(60 * 1000);
    return app.launchPackage(pgName);
  },
  closeApp: function (backCount, shutdownCallback) {
    for (var i = 0; i < backCount; i++) {
      back();
      sleep(1000);
    }

    if (shutdownCallback) {
      shutdownCallback();
    }

    home();
    device.cancelKeepingAwake();
    console.hide();
    sleep(1000);
    lockScreen();
  },
  skeleton: function (
    pgName,
    logX,
    logY,
    executeCallback,
    backCount,
    shutdownCallback
  ) {
    this.unLockPhone();
    console.info(engines.myEngine().getSource());
    this.stopOtherRunningScript();
    var isStarted = this.startApp(pgName, logX, logY);
    sleep(5000);

    if (isStarted) {
      console.log("应用启动");
      executeCallback();
      console.log("应用关闭");
    } else {
      console.error("启动失败");
    }

    this.closeApp(backCount, shutdownCallback);
  },
};
