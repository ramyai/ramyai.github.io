---
title: Texture Generation Experiments
year: 2021-2022
affiliation: Art + AI VIP, Georgia Tech
tools: 
    - Style Transfer NN
    - Normal Map Generator
    - Cinema 4D

keywords: 
    - technical-art
  
order: 25
thumbnail: /images/texgen/14.png
background: "#51889C"
---

<intro>
Textural synthesis experiments from my first year at Georgia Tech’s Art and AI Vertically Integrated Project. I proposed using GANs for rapid, art-directed textural synthesis on 3D models. Working on my idea under the guidance of upperclassmen, we prototyped an end-to-end texturing workflow that utilizes Golnaz Ghiasi’s <a href="https://colab.research.google.com/drive/1eyrkKumNzb326HGAOEvww1YbjRng0a43">Style Transfer Neural Network</a> and Antoine Mehdi’s <a href="https://github.com/Mehdi-Antoine/NormalMapGenerator">Normal Map Generator</a>. I created all renders below with Cinema 4D.

</intro>

**Problem:** When directing artistic endeavors in an experimental 3D graphics project, searching for unique, tileable textures catered to the project’s needs is one of the most exhausting aspects of the process. While commonplace physical textures such as metals or wood are accessible in most material libraries, more abstract, imaginative textures must be created from scratch. Though programs like Substance Painter cut out these steps by allowing artists to paint directly onto models, the UVs must be seamlessly unwrapped, which is a tedious task.

**Solution:** We assembled a tool on Google Colab  that can generate a set of artistic RGB and bump 3D textures in a few clicks, fully synthesized using GANs. This enables artists to experiment with new textures in a simple manner. This tool generates textures using a starting image and a transfer image reflecting the artist’s intended style. A normal map is created based on the resulting image and the new texture set is then available for download. Sadly, our final prototype was unable to implement tilability, so that is definitley future work :)

<img src="/images/texgen/1.jpg" alt="" style="width: 900px;">
<p class="caption"></p>


<div class="photo-grid" data-folder="/images/texgen/" data-gallery="texgen">
2.jpg ::
3.jpg ::
</div>
<p class="caption"></p> 


<div class="photo-grid" data-folder="/images/texgen/" data-gallery="texgen">
4.jpg :: 
5.jpg :: 
6.jpg ::
</div>
<p class="caption"></p> 

<h3> Art-Direction Test </h3>

<img src="/images/texgen/7-8.png" alt="" style="width: 900px;">
<p class="caption"></p>

<img src="/images/texgen/9.png" alt="" style="width: 900px;">
<p class="caption"></p>

<intro>
Since our tool could let us transform images of whatever we wanted into usable, interesting  textures, I was curious if it could be used to creatively communicate hard-to-visualize research on campus. I got a lovely opportunity to collaborate with mechanical engineering researcher Dongjing He to create an art project representing his research via the Science.Art.Wonder initiative. Since his work involves soft-body mechanics, I used a soft-body simulation to represent a polymer network. 
</intro>
<h3> Completed S.A.W Animation </h3>

<div class="video-tile">
      <video controls playsinline preload="metadata">
        <source src="/images/texgen/10.mp4" type="video/mp4">
      </video>
</div> <p class="caption"></p>

<intro>
Even though I finished the animation prior to this project, I decided to revisit He’s research to see if I could translate his work into usable textures. I first took a bunch of macro photos of the gels, equipment and microscope results in his lab:
</intro>

<img src="/images/texgen/11.png" alt="" style="width: 900px;">
<p class="caption"></p>

<intro>
With the help of the AI models implemented by our tool, I was able to convert these images into an interesting set of textures!
</intro>

<img src="/images/texgen/12.png" alt="" style="width: 900px;">
<p class="caption"></p>

<div class="photo-grid" data-folder="/images/texgen/" data-gallery="texgen">
13.png ::
14.png ::
</div>
<p class="caption"></p> 

<!-- <div class="video-tile">
      <video controls playsinline preload="metadata">
        <source src="/images/busheyes/Busheyes1.mp4" type="video/mp4">
      </video>
</div> <p class="caption"></p> -->

<!-- <div class="video-row hz-pair">
<div class="video-tile">
    <video controls playsinline preload="metadata">
    <source src="/images/ess/daze3_small.mp4" type="video/mp4">
    </video>
</div>
<div class="video-tile">
    <video controls playsinline preload="metadata">
    <source src="/images/ess/swirl_small.mp4" type="video/mp4">
    </video>
</div> 
</div>
<p class="caption"></p> -->


<!-- <div class="photo-grid" data-folder="/images/comesit/" data-gallery="come-sit">
1.jpg :: 
2.jpg :: 
</div>
<p class="caption"></p> -->

<!-- <img src="/images/pixarplants/cactus.jpg" alt="" style="width: 280px;">
<p class="caption"></p> -->