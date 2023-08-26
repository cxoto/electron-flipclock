const { app, BrowserWindow, globalShortcut, Menu } = require("electron");
const path = require("path");

const createWindow = () => {
  const preload_path = path.join(__dirname, "preload.js");

  const win = new BrowserWindow({
    fullscreen: true,
    autoHideMenuBar: true,
    alwaysOnTop: true,
    webPreferences: {
      preload: preload_path,
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows.length == 0) {
      createWindow();
    }
  });

  globalShortcut.register("CommandOrControl+Q", () => {
    app.quit();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("will-quit", () => {
  globalShortcut.unregister("CommandOrControl+Q");
  globalShortcut.unregisterAll();
});
