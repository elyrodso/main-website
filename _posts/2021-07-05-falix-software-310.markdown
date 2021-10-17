---
layout: post
title:  "FalixNodes Software v3.1.0 Released"
date:   2021-07-05 21:33:17 -0400
permalink: /blog/falix-software-3.1.0-released/
image: /assets/images/posts/thumbnails/falix-software-310.webp
---

<img id="thumbnail" src="{{page.image}}">

## <i class="fa-duotone fa-language"></i> Better Language Support
It has been highly requested to add other languages to our desktop software for users around the world to use and understand. So I, Korbs, have finally added 4 extra languages including French, Spanish, Chinese, and Hindi.

You can set the language through the settings or set it up on our new welcome screen:

There are still plans to add more languages like Russian, Portuguese, and Latvian. I, Korbs, will also be looking into translating and improving all documentations on the software, aka the README file on our GitHub.

## <i class="fa-duotone fa-vector-polygon"></i> Design Changes
There is not much new about design changes, but rounded corners were added for Windows 11 and slight adjustments to the settings. Other than that, the welcome screen has been re-designed:
https://files.catbox.moe/f2nemg.mp4

## <i class="fa-duotone fa-bell-on"></i> Push Notifications
As requested, push notifications have been added, this will only appear if the software is opened. A push notification works exactly like a website notification, where if there is a new story is out or a notification is on your account, your browser will send you a notification to your system. In this case, Falix Software will send a notification.
Notifications will now be pushed be when an announcement occurs on our Discord server or a new post in the News tab.

## <i class="fa-duotone fa-flask"></i> Windows 11
This new version of Falix Software has been tested on Windows 11 (Build 22000.5) and everything seems to be working fine.

According to Microsoft, they’ve improved the performance in Windows 11. While building Falix Software v3.1.0, I noticed faster performance and improvements in Windows 11. We have a benchmark test for opening the app, along with building the source code, here’s the benchmark for my system on Windows 11:

- Millisecond is rounded up
- Installing Node Packages: 36s
- Rebuilding Modules: 7s
- Start Software: 4s
- Build - Target being NSIS: 1m 12s

The round corners Microsoft is adding to the design of Windows doesn’t seem to be forced on the software, I assume this is because of the transparency the software uses, so there is a new rounded corner setting you can enable in the Settings. The rounded corner setting can also be set on Windows 10.

## <i class="fa-duotone fa-conveyor-belt"></i> Deployment Changes
Deployment is where we package up the software nicely to setup files to distribute across operating systems like Windows, macOS, and Linux. Usually during deployment, we packaged up the software as .appx for Windows, .dmg for macOS, and .snap for Linux. Usually .appx and .snap are uploaded to an app store and not given to the user directly.

We’re making some changes to how the deployment works for all operating systems, mostly Windows and Linux.

### Windows

When releasing a new version of Falix Software to the Microsoft Store, we have to wait for a human at Microsoft to review our update submission, which will only happen during the week days between 9am to 5pm. We don’t like waiting, well no one likes waiting, so we plan to bring back the classic setup file that can be used instead, y’know, the exe setup file. This means that support for Windows 7 and 8.1 are coming back, although we do recommend you to upgrade from Windows 7.

### Linux
For a long time, Falix Software has been distributed to the Snap store, an universal store for all Linux distros. Due to some issues with the Snap store, we’re no longer able to update Falix Software on their store, as there is a compiling error on Snap’s side. We’ll be switching to the AppImage format for distribution on Linux, which is the only other format we can use to include auto updating with Electron Builder.

We’ve also ran into many issues while using the Snap store as the go to place to get Falix Software for Linux, which is the other reason why we’re going to stop updating Falix Software on the Snap store. As we don’t want more errors getting in the way of development, the Snap store was the reason why some updates were pushed back on their release date, causing delays due to errors on Snap’s end.

Update (July 5th at 10:00pm): A new update server has been worked on and confirmed working. We’ll be using a self hosted update server instead of GitHub Releases. This is to prevent the updater from relying on GitHub tokens as it can cause conflicts if the token gets deleted or a different token is used, we experimented with this last time with GitHub and it didn’t work out. So it’s more effective to use a self hosted update server.

Update server: https://updates.korbsstudio.com/falix-software/

### macOS
There has been a lot of testing, so far failed, but we’re working on it. We’re trying our best to bring auto updating of Falix Software to macOS. To make this possible, we’re required to sign our DMG file, that is used to install Falix Software.

We do have Apple Certificates to make this possible, but our account holder of our Apple Developer account is still having some issues creating the .p12 file we need to make this possible.
Once we manage to do this, we’ll be signing it via GitHub Actions for each update.

### GitHub Actions
When packaging up the software, we use commands from Electron Builder to package it and then build the setup file, but we have to do this on all three operating systems. Meaning if we want to build a .dmg file, it has to be done on macOS, you get the picture.

Sadly, the developer behind Falix Software doesn’t have easy access to macOS or sometimes Windows. So there has to be a workaround instead of relying another user to build it on their Macbook.
So I, Korbs, have been doing tons of experimentation with GitHub Actions to allow this process to be more easier. GitHub Actions will allow us to build the software on Windows, macOS, and 

Linux with their machines instead of our own. First off, what is GitHub Actions?
GitHub Actions helps us automate the workflow of the production behind the building of those setup files we mentioned. You can look into GitHub Actions if you want to.