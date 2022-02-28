const { app, BrowserWindow, ipcMain } = require("electron");

let win = null;

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: true,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.loadFile("gui/index.html");
};

app.whenReady().then(createWindow);