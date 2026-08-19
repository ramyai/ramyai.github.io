---
title: Digital Bothy
year: 2023
affiliation: 
tools:
  - Unreal Engine 5
  - Photogrammetry with RealityCapture
  - Quixel Megascans
  - ZBrush
keywords:
  - personal
  - technical-art
  
  
  
order: 2
thumbnail: /images/bothy/thumb.png
background: "#293C57"
---
<intro>
I solo-hiked 15 miles to capture the Allt Scheicheachan bothy, a little hut tucked away in the Scottish ​​Cairngorms, through photogrammetry. I used the resulting 3D scan as the centerpiece for an immersive, first-person Highland excursion built with Unreal Engine. This project was completed in my free time over the course of a year, and it turned into a personal reflection on the tension between digital simulation and the natural world. Full essay below. 

This work was part of the International Symposium on Electronic Art (ISEA) 2024s academic proceedings as an artist talk paper. 

</intro>

<h3> huge thanks to Georgie Du Boulay for providing the real Highland noises used in this work! </h3>

<div style="display: flex; justify-content: center;">
<iframe style="aspect-ratio: 16 / 9; width: 100% !important;"   src="https://www.youtube.com/embed/wt-0oRQSusQ" title="Simulated Ecologies Results" frameborder="0" allow=" autoplay; picture-in-picture" allowfullscreen sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>
</div>  <p class="caption">Unedited screen recording. Everything shown is realtime, including audio.</p>

<h3> Essay + Additional Visuals </h3>

<essay>

In late 2022, I took a really long walk. I was studying at The Glasgow School of Art, and wanted to capture a unique aspect of Scotland’s landscape before leaving the country. I had never tried photogrammetry, but I was intrigued by how fickle and delicate the procedure was: the sky had to be slightly overcast, with no rain or wind to distort the images, and I needed to circle around the structure at just the right distances. I was growing exhausted by the granular control I had over my digital art practice. With infinite parameters, even the smallest choices become paralyzing. I was grateful to leave some variables to nature, so I proceeded to watch a few photogrammetry tutorials, rented out a camera and polarizing filter, and caught a 5:00 am train to Blair Atholl, where I would walk 15 miles alone through remote Highlands with a singular goal: to find and scan the Allt Scheicheachan bothy.

A bothy is a basic shelter, tucked away in the Scottish Highlands, and left unlocked for any traveler in need of refuge without payment or reservation. Bothies are too remote to access by car, and with little digital documentation, the only way to view one is to set out on a long hike by foot. Instead of spending 8 hours tied to my desk, I could spend the same amount of time moving through nature, preserving my experience in a digital artifact that could be shared with others. I didn't see a single person on the trail until the final mile, and my solitude made the experience even rarer.

<img src="/images/bothy/1.png" alt="" style="width: 780px;">

It was a sunny day in Blair Athol when I started my journey, which was beautiful weather to hike in, but suboptimal for photogrammetry. When I finally spotted the bothy’s faint outline, clouds miraculously appeared, turning the sky into an ideal shade of gray. I started circling around the bothy with the whole structure in my camera’s field of view, stumbling across the waterlogged terrain as I captured my photos. I then took a few steps forward and repeated the process. After six rotations, I ended up pressed against the bothy’s mossy stone, completing the scan just as it began to rain.


Many months passed since this excursion, and while I managed to align my ~200 bothy photos into a rough 3D model using RealityCapture, it sat untouched on my hard drive. The pressure to refine this approximation into a perfect digital replica was overwhelming. In that year, I also changed as an artist. I used to be fixated on hyperrealism, using vivid graphics to create an enhanced version of reality with every pixel in place. I have since become critical of the ways digital representations distort my own perception of reality, and I wanted Digital Bothy to reflect this.

<img src="/images/bothy/2.png" alt="" style="width: 780px;">


I finally had the vision and resources to return to this project a year after the initial hike while I was staying at the Animation Workshop in Viborg, Denmark. First, I cleaned up my bothy’s topology in ZBrush, before bringing it into Unreal Engine. I then built a grassy, washed out environment in Unreal with the help of Quixel’s 3D foliage library. I had photographed the bothy's surroundings extensively, so I had enough reference to build a nearly identical map in the game engine.

By the time I was done assembling the virtual environment, I could walk right up to the digital bothy and stare at all the little cracks and marks on its surface. If I explored the surrounding grassland, I could understand the bothy's form from all angles, gaining context tha photos online don't reveal. In real life, it takes a traveler upwards of 3 hours to reach the bothy by foot, so to mimic this slow passing of time, I restricted the digital hiker’s speed to a slow lurch, and there are no controls to walk faster. This makes the total in-game journey 20 seconds long, which is still trivial compared to the real excursion. I also assembled a soundscape from audio provided by my friend Georgie, who captures field recordings when she goes mountaineering in the Highlands.


<div class="photo-grid" data-folder="/images/bothy/" data-gallery="bothy">
3.jpg :: reference
4.png :: in-game
</div>


Part of my fascination with the bothy lies in its mystery: a traveler may not know about the building's size or condition beforehand, but they can expect a weatherproof shelter and a story to tell. I embraced uncertainty on my own trek to Allt Scheicheachan; I did not know if I would manage to locate the building, let alone scan it. If I willfully exposed the bothy to the player of my game, the most essential part of my experience would be lost in translation. To preserve what made the bothy sacred to me, I had to obscure its true form. 

<img src="/images/bothy/5.png" alt="" style="width: 780px;">

As the viewer approaches the bothy, it gradually begins to undulate and wobble, eventually tessellating into a mosaic of fractured polygons. The scene's shaders break and shards of bothy fly around the viewer, leaving them trapped in a swirl of mangled data. The audio also reacts to the viewer’s location, with recordings of Cairngorm winds amplifying the distortion as they enter the heart of the bothy. 

<div class="photo-grid" data-folder="/images/bothy/" data-gallery="bothy">
6.png :: 
8.png :: 
</div>

These manipulations of real audiovisual data allow the viewer to confront the dissonance of digital reconstruction specific to time and place. If the viewer lingers inside the bothy for long enough, they will be transported back to the outer edge of the map and must start their trek all over again. No matter how many times they try, they will never be able to see the bothy up close.

  <div class="video-row hz-pair">
    <div class="video-tile">
      <video controls playsinline preload="metadata">
        <source src="/images/bothy/vid2.mp4" type="video/mp4">
      </video>
    </div>
    <div class="video-tile">
      <video controls playsinline preload="metadata">
        <source src="/images/bothy/vid3.mp4" type="video/mp4">
      </video>
    </div>
  </div>

<img src="/images/bothy/9.png" alt="" style="width: 900px;">


</essay>
