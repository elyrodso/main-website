---
layout: post
title:  "Introducing FalixNodes Software v3 with an all New Design"
date:   2021-05-27 21:33:17 -0400
permalink: /blog/introducing-falixnodes-software-v3/
image: /assets/images/posts/thumbnails/falix-software-300.webp
---

<img id="thumbnail" src="{{page.image}}">

# Introducing FalixNodes Software v3 with an all New Design

It’s finally here, what you’ve all been waiting for!

## <i class="fa-duotone fa-vector-polygon"></i> New Design
Falix Software’s all-new design is a considerable improvement over the previous one, with continued to improve visual appeal. The new blur effect featured in the sidebar, credited to Glasstron, was one of the challenges in bringing this new look to the software. This had to be tested on both Windows and Linux to ensure that blur extensions like Blur Provider operated with the new design. Falix Software’s developer does not own a Mac, hence this was never tested properly on macOS.
The titlebar is now fully integrated into the software for both Windows and macOS. This was made possible through a template I wrote for Electron. In terms of Linux, most distros’ titlebar layouts differ, therefore the program will still resort to the OS’s original titlebar.

## <i class="fa-duotone fa-crystal-ball"></i> Features
### Game Panel Controls
The feature you’ve all been asking for, navigation controls for the Game panel.
T
his is all thanks to the controls I found working in this repo on GitHub.

Following controls added:
 - Load
 - Unload
 - Back
 - Forward
 - Reload

### Performance Improvement
With the new controls for the Game Panel, as mentioned previously, I’ve finally been able to reduce the amount of system resources demanded by the Game Panel. The Game Panel will now be unloaded by default when you launch the software, improving performance and startup duration.

### Appearance Settings
This has been in the development since v2.2.4 and is finally available. You can now change the software’s design, such as the accent color and sidebar size.

### ~~New Built-In Terminal~~
~~Wanna go mining for FalixCoins? You can now do so using the built-in terminal located in the FalixCoins Mining tab on the sidebar. This uses your system’s built-in terminal(Powershell for Windows, Bash for macOS), so whatever you can do already in your terminal, you should be able to do in here. This means you can run the mining software in here as well.
Download Mining Software~~

## <i class="fa-brands fa-microsoft"></i> Now Available in the Microsoft Store

With the addition of getting our software onto the Microsoft Store, we can finally include an effective auto updating system, because it’s managed literally by the Microsoft Store. This means auto update will not come to older versions of Windows like Windows 7 and Windows 8.1.