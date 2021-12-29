---
layout: post
title: "My Resin Protocol"
subtitle: "As it stands today"
date: 2021-12-29 11:16:00 +0500
tags: 3d-printing blog dnd minis 'dnd minis' monsters resin SLA
author: Pete
---
This is my current resin protocol. By that, I mean that this is how I actually make prints in a step by step manner.
<!--more-->
Man, there are a lot more steps to this than I imagined when I sat down to write this. First, the set up:

### The Resin Printer
The printer in question is an [Anycubic Photon S](https://www.anycubic.com/products/anycubic-photon-s). I got it on sale with the wash and cure station 2.0. I have used up one bottle of resin so far in my learning how this little magic box works. Also, how it doesn't work, and how they say it works, and how mine actually works.

#### Printer Settings
- Normal Exposure Time: 9.00 Seconds
- Bottom Exposure Time: 70.0 Seconds
- Bottom Layers: 3
- Z-Lift Speed: 3.0 mm/s
- Z-Lift Distance: 6.0 mm

### The Resin
Today I am using Anycubic's [White EC UV Resin](https://www.anycubic.com/collections/uv-resin/products/colored-uv-resin-for-photon-series?variant=30151434207292)

### The Models
The models I am printing today:
- [Druid Mini](/3d-printing/stl-files/traci_druid_OP1.stl) from Heroforge's STL download.
- A [Mimic mini](/3d-printing/stl-files/mimic-hungry.stl) from Thingiverse?
- Some [Zombies](/3d-printing/stl-files/zombie-1-a.stl) [Zombies](/stl-files/zombie-2-a.stl) [Zombies](/3d-printing/stl-files/zombie-3-a.stl) from Thangs.

### The Tools
- Plastic spatula
- Dry PTFE Spray Lubricant
- Allen wrench for your print plate alignment.

### The Method
1. Find or make some models to print.
2. Open your slicer software and load your models into the scene or project.
3. Arrange the models in the slicer so they do not touch or overlap. You can rotate and turn them to Tetris them in nice and tight.
4. **Add supports** to your models in the slicer. One by one select your models and add lots of supports. Or let the software do it and then add some more supports!.
   - ![Support Image From Above](/3d-printing/images/photon-workshop_models-and-supports-01.png)
   - ![Support Image from Below](/3d-printing/images/photon-workshop_models-and-supports-02.png)
   - Yes! Even pre-supported models need more supports.
   - "Support Free"? Not on my watch.
   - The main thing you need to remember is that there are forces on your models while they print. There is the lifting force of the print plate, the adhesion force of the model on the print plate, and the suction force of the print on the print screen. When printing, the adhesion force of the print to the print plate needs to be greater than the opposing suction force. Therefore you need to look at the cross section of your print and make a judgement comparing the surface area of your first layers verses each subsequent layer. **In short; make more supports to give more surface area on the plate than the surface area of any slice of the model itself.**
5. Save your "scene". Saving the scene saves your build plate to a file in case you want to use the same setup again and make adjustments.
6. Slice your model as per the software.
7. Save your new sliced .PWS/.PHOTONS file. And copy to your thumb drive.
8. Eject your thumb drive from your pc.
9. Plug thumb drive into your printer.
10. Install the print plate, making sure it's properly aligned to the screen.
11. Level the printer itself. (Your printer needs to sit on a sturdy **level** spot where it will not vibrate or be moved. a wobbly card table is a bad choice)
12. Level your print plate as per the directions. Tighten the set screw on the print plate.
13. Spray your resin tray print screen with Dry PTFE Lubricant. Wipe the print screen with a dust free cloth to remove all but a thin layer of lubricant on the print screen. (This only needs to be done when it needs to be done, probably not every time you print. Use your best judgment.)
14. Inspect and then install your resin tray.
15. Fill the resin tray 1/3 full of resin. (Wear Gloves).
16. Close up the printer.
17. Slowly, using the LCD screen, lower the print bed into the resin and raise it up again. Do this twice to ensure the entire surface of the print plate has been covered with resin.
18. Using the LCD screen, select the print menu and find your file. Select your file and then press start.
    - ![Print Screen](/3d-printing/images/photon-s_print-screen.png)
19. Wait a while. Like 15 minutes
20. Pause your print and let the print plate rise up so you can see underneath it. You *should* see some layers of your print stuck to the print plate.
21. Restart/Un-Pause your print.
22. Wait for print to complete.
23. Remove Print Plate and place in wash station alcohol bath.
24. Wash your print and build plate for at least 5 minutes.
25. Remove build plate from wash station and set on paper towels.
26. Using the plastic spatula remove the prints from the print plate onto the paper towels.
    - <img src="/3d-printing/images/20211229_141420_02.gif" style="width:40%; float: right; clear: both;"/>
27. Briefly let the prints dry.
28. Place prints in the cure station and cure for at least 5 minutes.
29. Examine your prints and remove the supports.
30. Prime and Paint your prints.
31. Enjoy Your Newly Minted Artifacts!

## Wind up
Yes, that is a lot of steps. Keep in mind I did not include steps for when something fails.

For example: if you check your print 10 minutes after starting (step 18) and see nothing sticking to the build plate, you need to restart from step 13 at least. Probably from step 3 is a better idea.

I had an issue where the resin was not curing at all in the printer. Not on the print bed *or* the print screen. I tested the resin with a UV LED and it turned hard as expected. I was stumped. The printer was on and the light was on but the resin was not curing. A google search said I should turn the printer off and on again. I did just that and it magically fixed the issue. There was no explanation as to why this occurs.

<img alt="Did you turn it off and on again" src="/3d-printing/images/did-you-turn-it-off-and-on-again.gif" style="margin: auto;" />

### Finished Prints
Full disclosure, this was not a perfect print. One of the minis lifted away from the build plate on one side and failed to print properly. I did get 2 zombies and a larger Mimic though.

<img alt="Successful Prints" src="/3d-printing/images/20211229_180544_successful-prints.jpg" style="width: 30%;"/>

They need some paint to pop. I will get on that soon.
