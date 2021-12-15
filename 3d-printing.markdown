# 3d-printing (Updated December 13th 2021)

**Printing**... if you have ever setup a printer or worked in an office and had to print stuff, you know how frustrating printing can be. From the drivers to the network, to the paper tray, it's all annoying and can ruin your print experience at any time. 2D Printing on paper has been a challenge for office workers since they came on the market. In fact printers are so annoying they made a movie about it.

<img alt="Office Space - Advanced Printer Destrucion" src="https://acegif.com/wp-content/uploads/office-space-gifs-113.gif"> 

3d printing *can* be just as frustrating and annoying as any printer you have ever used. Imagine that 40 page assignment you had to have for your professor/boss that would not print properly. 3D printing is just like that, except, you cannot simply print page 38 over again and be ok. Since they build directly upon the layer below, if a layer(page) is not almost perfect the next layer will also not be perfect and it will build on that small error compounding over time into a failed print.

That said you can do a lot to make sure your print succeeds. From choosing the right printer, and the right filament. To leveling your print bed properly, and choosing the necessary slicer settings. You too can dial in your printer just right.

## What kind of printer should I get?
Before you choose a 3d printer you should think ahead about what you want to print. Minis, jewelry, and small parts are great for a DLP resin printer. Larger parts like: toys, structural elements, anything large , etc. are probs best printed on an FDM filament printer.

I am pretty happy with my Ender3Pro FDM printer. Recently I have upgraded it from the stock model to make it even better. FDM Printers like the Ender3pro are harder to upkeep as they have **many** moving parts and are quite technical to operate. I have been looking into resin printers for high detail small parts like Dnd Minis and jewelry. Resin printers are fast, easy to use and provide great detail to your prints. They are much simpler than FDM printers as they have far fewer moving parts.

The Ender 3 pro is no longer produced and has been replaced by the Ender 3 v2. Check out this great video on its pro and cons: https://youtu.be/sbRHZUnmfYw

Small resin printers in the sub $250 range are basically the same as larger more expensive versions. They are perfect for minis and high detail projects. This is a great video on resin printing: https://www.youtube.com/watch?v=WNgtWLBs4tc&ab_channel=ZackFreedman. I watched this and I was immediately inspired to plan my next printer purchase for resin minis.

So far, I have an the most experience with FDM printers and I am just getting started with resin. 

Despite all the frustration and difficulty I have a lot of fun printing all sorts of stuff for fun and profits. I have compiled the information here in an effort to help others who are interested in the 3d printing world.

## Videos/People to watch
- This is a pretty cool video on getting started with 3d printing
  - https://youtu.be/T-Z3GmM20JM?t=26
- Also Zack Freedman has a great channel on all things maker and printer related
  - https://www.youtube.com/channel/UCUW49KGPezggFi0PGyDvcvg
- This young lady, AuroraTech, is super informative as well.
  - https://www.youtube.com/channel/UCGER4yfUXubhNVPYoNzBSEA

## My FDM Printer Setup

### Ender 3 Pro 
<img alt="Ender 3 Pro" src="images/ender3pro.png" style="width: 500px;margin: 5 auto">

$209 The [Ender 3 Pro](https://www.creality3dofficial.com/products/creality-ender-3-pro-3d-printer) cames as a kit to assemble. This made me more familiar with it and since I built it I can always fix it. :)

### Current Ender 3 Pro Upgrades:
These are not required. I used a stock ender 3 for more than a year before any upgrades at all. Now I think it performs better and it's super fun to tinker with and improve your printer. Here are the upgrades I have done, in roughly the order I did them.

#### Raspbeery Pi With the Octoprint Print Controller
If our printer supports it, you should set up an Octoprint print server. It provides a web interface to send jobs to your printer and basically control all of it's functions remotely.

<img alt="Rasberry Pi 4 8GB" src="images/raspberry-pi-4-b-8g.jpg" style="width:40%"/>

$75-$160 [Affiliate link](https://www.amazon.com/gp/product/B08B6F1FV5/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08B6F1FV5&linkCode=as2&tag=hepaestus-20&linkId=1afde8e5c3316806a2f0a7fc6d2f4477)
- Software: https://octoprint.org/

#### Bed Leveling Sensor
<img alt="BL Touch Sensor Kit" src="images/bl-touch.jpg" style="width:40%"/>

$50 [Affiliate Link](https://www.amazon.com/gp/product/B08MD3ZJTD/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08MD3ZJTD&linkCode=as2&tag=hepaestus-20&linkId=864136347d011df6561688104b04d88a), [Webpage](https://www.creality3dofficial.com/products/creality-bl-touch)
- This sensor precisly neasure the distance to your print bed and uses some fancy maths to calculate the flatness of your print bed.

#### Tempered Glass Build Plate
<img alt="Creality Tempered Glass Build Plate" src="images/creality-tempered-glass-bed.jpg" style="width:40%"/>

$20 [Affiliate Link](https://www.amazon.com/gp/product/B0836PMMZ5/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0836PMMZ5&linkCode=as2&tag=hepaestus-20&linkId=4ee35e7121f259785375567901e87fbe), [Official Page](https://www.creality3dofficial.com/products/creality-new-upgraded-heated-bed-build-plate-surface)
  
#### Creality 4.2.7 Silent Control Board
<img alt="4.2.7 Silent Control Board" src="images/creality-4.2.7-board.jpg" style="width: 40%"/>

$50 [Affiliate Link](https://www.amazon.com/gp/product/B08G4SCZDR/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08G4SCZDR&linkCode=as2&tag=hepaestus-20&linkId=499a6468147e8fd54ca7d8515820e4d1) , [Official Webpage](https://creality3d.shop/products/creality3d-upgrade-silent-4-2-7-1-1-5-mainboard-for-ender-3-ender-3-pro-ender-5-3d-printer)
- This was the single best upgrade I have made. The upgraded board makes the printer much quieter and faster, pretty much silently running the stepper motors. New Ender 3 Pros come with a newer control board. I am not sure of the model. Now I think they come stock with the better 4.2.2 or 4.2.7.   

#### Dual Z-Axis 
<img alt="Dual Z-Axis" src="images/dual-z-axis.jpg" style="width: 40%" />

$40 [Affiliate Link](https://www.amazon.com/gp/product/B08S71B4R9/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08S71B4R9&linkCode=as2&tag=hepaestus-20&linkId=320864efd892784efadbcc762672d5ca)
- The Ender 3 Printers only have a single Z-Axis and can have a tendancy to sag slightly on the right hand side. The dual Z axis ensures but sides are perfectly inline with each other.

#### OMG EXTRUDE Direct Drive Extruder
<img alt="OMG EXTRUDE" src="images/omg-extrude.jpg" style="width: 40%"/>

$85 [Affiliate link](https://www.amazon.com/gp/product/B098TZ2PYK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B098TZ2PYK&linkCode=as2&tag=hepaestus-20&linkId=a5331e21dafcba92c619657d935876a1)

#### RBG Lights
<img alt="EZNeo RGB Lighting Strip" src="/images/ezneo-rgb-light.jpg" style="width: 40%"/>

$24 [Official Site](https://www.th3dstudio.com/product/ezneo220-rgb-printer-lighting-strip/)
- This is more important then you might think if you plan to create timelapse videos of your prints. Also it flashes colors to indicate printing issues.

### Planned Upgrades
- 3d Printed Fan Shroud that allows for cooling on all sides of the print head. Currently it is one sided :(

## Resin Printers
<img src="images/anycubic-photon-s.jpg" style="width: 40%; float: left; margin: 5px"> <img src="images/anycubic-wash-and-cure-2.jpg" style="width: 40%; float: left; margin: 5px">

I also have a resin printer for Dnd minis and small precision parts. I have the [Anycubic Photo S](https://www.anycubic.com/collections/anycubic-photon-3d-printers/products/anycubic-photon-3d-printer) with the [Wash and Cure Station 2.0](https://www.amazon.com/gp/product/B08JCSSTD5/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=hepaestus-20&creative=9325&linkCode=as2&creativeASIN=B08JCSSTD5&linkId=57b74f3e05d795dc64de733455e5f6f0).

I am currently waiting for the wash and cure to be delivered so I have not used the resin printer as of yet. It's all set up and ready to go.


## Other Printers Of Note
If you have a larger budget and larger ambitions, and or want to print super long/tall items, or a huge series or multiples this is what you would want :)  $+1K https://www.creality3dofficial.com/products/cr-30-infinite-z-belt-3d-printer

## Stuff to print
For starters try printing a [Benchy](https://www.3dbenchy.com/) 

![Benchy](https://www.3dbenchy.com/wp-content/uploads/2015/04/3DBenchy.com_logo_standard_text_250x1001.png)
- Benchy is quick to print and can help fine tune your prints. A good benchy is an indicator of a well set up printer.

### Tools for Creating Minis
Hero Forge has a great tool for designing *custom* gaming minis that you can download at STL files for your slicer. Custom STL files are about $3.50 USD.
- https://heroforge.com/

Eldritch Foundry also lets you create custom STL files for download.
- https://eldritch-foundry.com/

My Mini Factory has tons of free minis to print. 
- https://www.myminifactory.com/
  
### Sites with paid and free models to print
Here are a few places to get awesome things to print
- https://thangs.com/
- https://www.thingiverse.com/
- https://3dcults.com


## Software You Will Need
You can download ready to print files from the internet quite easily, but if you have an idea for a print you will need to render your idea in a drawing program. You will likely want to use a parametric drafting program to best create your models. There are also sculpting tools that will render STL files but I have not tried them.

Here are two options to try. Both are well supported with tons of video tutorials on youtube.
- Drawing/Modeling/Drafting Software
  - Fusion 360 (might be free for personal use) I have the most experience with this.
    - Parametric Drafting software for creating and editing stl files to print.
      - https://www.autodesk.com/products/fusion-360/personal
  - FreeCad (free software) I have never sucessfully used this to create a model. I have not given it the attention I have given Fusion 360.
    - Open Source (Free) Parametric Drafting software.
      - https://www.freecadweb.org/


Once you have a model to print, you will need "Slicer" software to convert your model to GCode your printer can understand. Slicers generally take STL files as input. Most slicers are pretty easy to use. Create a new project and import/open your stl files. Arrange them on the print plate and slice. 
- Slicers (I have tried)
  - Super Slicer 
    - This is an awesome slicer that is easy to use and 
    - https://github.com/supermerill/SuperSlicer/releases
      - Goto Assets and choose your OS.    
  - Cura 
    - https://ultimaker.com/software/ultimaker-cura


Finally when you are printing you will want the best interface possible. For my Ender 3 Pro I use Octoprint. Octoprint connects to your printer and controls it remotely. You can use the web interface to upload files to print and track print progress and status. You can use additioinal plugins to create time lapse videos of your prints or send you an SMS when printing is done. Watch or check on your print remotely via webcam.

- Octoprint: https://octoprint.org/ 
  - [Latest Version](https://octoprint.org/download/)
    - SDCard Creation (for setting up octoprint)
      - [RaspberryPi Image Burner](https://www.raspberrypi.com/news/raspberry-pi-imager-imaging-utility/)


## How do I do any of this? What do I do first?
1. Buy an [FDM 3d printer](https://www.amazon.com/gp/product/B07BR3F9N6?ie=UTF8&tag=hepaestus-20&camp=1789&linkCode=xm2&creativeASIN=B07BR3F9N6) or buy a [Resin 3d printer](https://www.amazon.com/gp/product/B093SC6TDS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B093SC6TDS&linkCode=as2&tag=hepaestus-20&linkId=810d8c7f677357e3159bfeb3a8e36727)
2. Assemble the printer according to the instructions.
3. If your printer supports using one, [buy a Raspberry Pi, SD Card, Power supply](https://www.amazon.com/gp/product/B07V5JTMV9/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07V5JTMV9&linkCode=as2&tag=hepaestus-20&linkId=c66b26ab4414e7a0eabea9f756b3ac70) (The Photon S does not support Octoprint)
4. [Download and Setup Octoprint](https://octoprint.org/download/). 
6. Install Software
- Drawing Software
  - [Fusion 360](https://www.autodesk.com/products/fusion-360/personal)
  - [FreeCad](https://www.freecadweb.org/)
  - Others ???
- Slicing Software
  - FDM Slicers  
    - [Cura](https://ultimaker.com/software/ultimaker-cura)
    - [Super Slicer](https://github.com/supermerill/SuperSlicer/releases)
  - Resin printer Slicer
    - [Photon Workshop](https://github.com/ANYCUBIC-3D/PhotonWorkshop/releases) (Slicer for Anycubic Resin Based Printers.)
      - Came with the printer on the USB stick, but you should get the latest version.


### Printing Workflow
Your workflow will be as such:
1. Create/Download an model in STL format.
2. Import/Open your stl file in your slicer of choice.
3. Update your slicer and print settings for this specific file.
4. Generate your GCode with the Slicer software.
5. Upload GCode to your Printer via sneaker-net or Octoprint depending on printer.
6. Print your file!
7. Remove from build plate and remove supports.
8. Clean and Cure Resin
9. Enjoy your print!

## Some of my successfull prints
- [Dactyl Manuform Keyboards](https://www.thingiverse.com/thing:3037954)
- [The Segmented Slug/Worm](https://www.thingiverse.com/thing:4727448)
- [Temps-O-Matic Enclosures](https://temps-o-matic.com)
- [Articulated Dragon](https://cults3d.com/en/3d-model/game/articulated-dragon-mcgybeer)


## Future Topics of interest
What would you like to see more info about?

- 3d Printing Consumables
  - Filaments
    - COEX PLA and PLA Prime 
    - Matter Hackers Build Filament
    - Solutech ABS
  - Resin
    - Anycubic Basic Grey 405nm

## Do You Have A Question? A Comment? Did you find an error?
If you want to ask a question, comment, or report an error please click
[here and do your thing](https://github.com/hepaestus/3d-printing/issues/new).

