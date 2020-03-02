const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const remote = require('electron').remote;
const { dialog } = require('electron')

// Global reference to the window, avoid garbage collecting.
var win

function createWindow() {
    // Create browser window.
    win = new BrowserWindow({ 
        width: 1920, 
        height: 1080, 
        frame: true,
        icon: path.join(__dirname, 'img/icon.png'), 
        title: 'Info',
        webPreferences: {
        nodeIntegration: true // add this
        }
    });

    // Maximize window.
    win.maximize();
    

    // Load the main page as html.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'html/login.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Open devtools.
    //win.webContents.openDevTools();

    // Add the window variable to the garbage collector candidates.
    win.on('closed', () => {
        win = null;
    });

}

// Create window on callback.
app.on('ready', createWindow);

// Close explicitly.
app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

