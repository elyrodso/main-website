---
layout: post
title:  "FalixNodes Software v3.2.0 Released"
date:   2021-08-08 21:33:17 -0400
permalink: /blog/falix-software-3.2.0-released/
image: /assets/images/posts/thumbnails/falix-software-320.webp
---

<img id="thumbnail" src="{{page.image}}">

## <i class="fa-duotone fa-window"></i> Controls for Client Panel
For a while now, you’ve been able to simply go back and forth with controls for the Game Panel, controls like you see in a regular desktop web browser. Although for a while, the Client Panel did not have these due to limitations. In this new version I, Korbs, found a way to finally add controls to the Client Panel, which has been highly requested in the past. Now if you mis-clicked on an advertisement in the Client Panel, you can now simply go back without having to either restart or close/re-open Falix Software.
You can view more about this in the technical area of this post on how this works in the code.

## <i class="fa-duotone fa-keyboard"></i> New Keyboard Shortcuts
Keyboard shortcuts have been added for quick navigation, the hotkeys may be changed overtime.
Ctrl + O| Open Client Panel
Ctrl + P | Open Game Panel
Ctrl + . | Open Help Center
Ctrl + , | Open Settings

## <i class="fa-duotone fa-vector-polygon"></i> Any Visual Changes?
This update doesn’t really bring any big visual changes, but the sidebar is slightly smaller now and the settings view has been slightly updated.
In the Settings, toggles and switch have been replaced with check boxes.

## <i class="fa-duotone fa-compass-drafting"></i> Technical Issues
During the testing phase of Falix Software v3.2.0, some issues have arisen.
The terminal seems to be no longer support for Windows 7, which means Windows 7 users will get an error on screen each time you start Falix Software.
The Microsoft Store will not be receiving this update. Due to manifest issues, I’ve refused to waste more time on the manifest issue and decided not to release this version to the Microsoft Store.
## <i class="fa-duotone fa-compass-drafting"></i> Technical Changes
Throughout most of the development phase of Falix Software v3.2.0, most of the code behind the scene has been thoroughly cleaned. This makes up the majority of scripts for basic functions like as sidebar navigation, click events, webview control, and so forth.
Language Support
The content of language support hasn’t really changed, but the way text is shown in Falix Software has changed to make changing languages easy and also easy on the developer. I, Korbs, tried using and experimented with the JSON method and other methods and ended up not getting things synced up properly. Eventfully, a choice of method was landed on and it is the CSS method, yes I said CSS.
If you’re a developer or at least familar with CSS, you know that CSS is mainly used to style a website and make it look pleasing for visitors. Well with the language support change, “::before” with “content:” is now used to spit out text in the software. The old appearance scripts are being used to switch between language.css files if a user changes the language.

Example:
```
t2p#page-news::before {content: "News";}
t2p#page-client_panel::before {content: "Client Panel";}
t2p#page-game_panel::before {content: "Game Panel";}
t2p#page-falixcoins_mining::before {content: "FalixCoins Mining";}
t2p#page-support::before {content: "Support";}
t2p#page-help_center::before {content: "Help Center";}
t2p#page-settings::before {content: "Settings";}
```

Then in HTML, “<t2p>” will be used with the properly assigned ID. Like this:
```
<t2p id="page-news"></t2p>
```

“<t2p>” is not a known attribute, but is a custom one used in Falix Software. TP2 means “Text to Page”.
### Main File
The main file is the main process of the software and during the code cleanup of this update, it’s been improved significantly. One of the major issues is that there were always three sections of the file, mostly just a copy of each other for three OS platforms. During the code cleanup, this is finally been brought down to just one section, the way it should be.
So instead of this:
```
function createWindowWin() {
     frame: false
}
function createWindowMac() {
     frame: false
}
function createWindowLinux() {
     frame: true
}
It’s simply this:
function createWindow() {
     frame: gloabal.frame
}
```

Of course, we need to tell the software to still detect the OS somehow, this way the titlebar layout is correct for the assigned OS along with the terminal type in the FalixCoins Miner tab. 

To do this, “global” is used. It’s kinda like “vars” as talked about the section below in this post about Webview Controls.

Example, as used in Falix Software:
```
global.frame = "false";
```

Then we can input the global like:

```
frame: global.frame,
```

### Webview Controls
The webview controls did receive a significant update, since they were mostly overhauled. The old script was essentially a boilerplate from a webview sample on GitHub; the developer, Korbs, reverse engineered how the script works and started digging into Electron’s Webview documentation. During the documentation study, the term “vars” was mentioned, which had not been previously thought of when building Falix Software. Falix Software can now include controls for individual webviews thanks to “vars.”

Vars are used in the controls script to assign a variable to each webview, like shown:

```
var webviewCP = document.getElementById('client_panel_wv');
var webviewGP = document.getElementById('game_panel_wv');
var webviewSP = document.getElementById('support_wv')
function CP_wvGoBack() {
     webviewGP.goBack();
}
```

Then, in the main HTML file, webviews are simply given the appropriate ID:

```
<webview id="client_panel_wv" src="" ></webview>
<webview id="game_panel_wv" src="" ></webview>
<webview id="support_wv" src=""></webview>
```

### HTML Layout
If you’ve ever looked at the index.html file on our GitHub, you’ll know that it gets rather chaotic in there. Since Falix Software is necessarily driven in one file. I, Korbs, went ahead and started breaking up sections of the index file into their own HTML file; these HTML files will be injected on the main page using the include function that was initially used for the News tab.
Including a HTML file is easy, it’s basically like inserting an iFrame:
<div include-html="./path/to/file.html"></div>
However, webviews should remain in the index file otherwise the new control script would fail to identify them on startup.