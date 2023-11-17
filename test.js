// toast(text("领取成功").exists());
// click(996, 149);

// toast(text("再看一个视频额外获得").exists());
// click(543, 1341);

// --

while (true) {
  if (text("领取成功").exists()) {
    click(996, 149);
    sleep(2000);

    if (text("再看一个视频额外获得").exists()) {
      click(543, 1341);
      sleep(2000);
    }
  }
  sleep(1500);
}
