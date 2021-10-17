---
layout: post
title:  "FalixNodes Software v3.4.0 Released"
date:   2021-09-20 21:33:17 -0400
permalink: /blog/falix-software-3.4.0-released/
image: /assets/images/posts/thumbnails/falix-software-340.webp
---

<img id="thumbnail" src="{{page.image}}">

## <i class="fa-duotone fa-shield"></i> Security
Falix Software v3.4.0 introduces changes under the hood that increases security measures and decreases the risk of an attack on Falix Software users.

### Domain Restrictions
The obvious first step was always to whitelist websites that Falix Software is allowed to see, which are mainly domains preceding in “*.falixnodes.net/*.” If a user clicks on a link or button that directs the webview to a non-whitelisted site, Falix Software will force redirect the webview to the security warning page as shown.

Viewing domains outside of Falix might be risky since some websites may attempt to steal your data or, worse, misrepresent as Falix itself. You no longer have to be concerned about this with Falix Software.

### Context Isolation
What is “Context Isolation”?

“Context Isolation is a feature that ensures that both preload scripts and Electron's internal logic run in a separate context to the website you load in a webContents. This is important for security purposes as it helps prevent the website from accessing Electron internals or the powerful APIs your preload script has access to.

This means that the window object that preload script has access to is actually a different object than the website would have access to. For example, if you set window.hello = 'wave' in your 
preload script and context isolation is enabled, window.hello will be undefined if the website tries to access it.”

Originally, I left this disabled in Falix Software so that certain functions could execute without difficulty. Well, I discovered a workaround by keeping context isolation enabled while certain functions continue to perform effectively. To go around this, Falix Software added “contextBridge,” which whitelists which functions can be performed.

We can utilize Context Bridge to whitelist the functions used in Falix Software ‘s source code, blocking unapproved functions from being run on the software from outside sources.

## <i class="fa-duotone fa-crystal-ball"></i> ️Changing Functionality
Because Context Isolation became enabled by default, several features initially stopped working properly, such as clicking a news article on the News page and labels no longer displaying in the About section of the Settings page. To address this, I continued to add more IPC functions to the main process, allowing the functions to operate and whitelisting them in Context Bridge.

Here’s an example of scripts that the Windows titlebar uses:
```
ipcMain.on('minimize', () => {mainWindow.minimize()})
ipcMain.on('maximize', () => {mainWindow.maximize()})
ipcMain.on('restore', () => {mainWindow.restore()})
ipcMain.on('close', () => {mainWindow.close()})
```

For these scripts to be whitelisted, we add the following to the preload script:
```
const { contextBridge, ipcRenderer} = require("electron");
contextBridge.exposeInMainWorld(
"api", {
     send: (channel, data) => {
          let validChannels = [
               "minimize",
               "maximize",
               "restore",
               "close"
          if (validChannels.includes(channel)) {
               ipcRenderer.send(channel, data);
          }
     }
});
```

Then in the HTML code, we can excute a script by using:
`onclick="window.api.send('close')"`

## <i class="fa-duotone fa-user-crown"></i> New Account Settings

The account settings area on our website, located in the client panel, we nicely re-designed. With that, a new tab was added to the Settings page, which you can use to access your account settings.