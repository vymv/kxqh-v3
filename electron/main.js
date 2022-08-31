// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

//这里的配置手动写的，也可以使用cross-env插件配置
const mode = "production";
//const mode = "development";

/*隐藏electron创听的菜单栏*/
Menu.setApplicationMenu(null);

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 720,
    minHeight: 1920,
    minWidth: 720,
    frame: true /*是否展示顶部导航  去掉关闭按钮  最大化最小化按钮*/,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  //mainWindow.loadFile("index.html");
  mainWindow.loadURL(mode === "development" ? "http://localhost:2021" : `file://${path.join(__dirname, "../dist/index.html")}`);
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
