---
title: "Flatpak: Debunking Size Queens"
tags: linux, flatpak
---
### I often hear complaints about [Flatpaks](https://www.flatpak.org/) online, and most of them are inaccurate. 

> *How can a calculator be 700MB??? Those madmen @ RedHat have gone mad*

Today I want to put this vile rumour to rest once and for all. 

### I also wish to dedicate this post to all Flatpak critics using ```.appImages```, on whom the irony appears lost.

Flatpaks utilise shared dependencies, called *runtimes*. They can be indeed quite heavy in size, with the most common topping out at below 1GB. However, I am putting extra emphasis on the word *shared* - if you are installing a flatpak calculator app on a system with no flatpaks, well, it will need to download that hefty runtime. However, once that is done, every other flatpak that requires this runtime will simply reuse it. Different apps might well require different runtimes, or different versions of them, but the main one is the ```freedesktop```, and it updates fairly infrequently, meaning most generic apps can simply target that. 

This can seem like installing an app via a package manager but with extra steps. However, flatpaks are, among other things, immune to [Dependency Hell](https://en.wikipedia.org/wiki/Dependency_hell) - every app guarantees compatibility with a specific runtime, which itself guarantees specific libraries & library versions availability, uncustomized by distributions. 

### No more distro-specific bugs, no more incompatible dependencies, no more "library X not available on distro Y" - if a distro can run flatpak, it can run any app packaged as such.

If Ubuntu/Debian and SUSE/Fedora (and Arch btw) really wanted to bury the hatchet and standardize on a single, targetable platform, they could have done so in the last 20 years. Flatpaks solve this dispute once and for all, and enable many more features, such as immutable OSes, sandboxing, portability, universal bugfixes/security patches in libraries, etc. But that is an article for another day.