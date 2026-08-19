---
title: Live Coded Visuals at Electronic Sound Systems
year: 2024
affiliation: WREK Atlanta
tools:
  - Hydra JS Video Synth
  - Flok P2P Editor
  - Webcam + Focusrite Inputs
keywords:
  - featured
  - technical-art
  
  
  
order: 3
thumbnail: /images/ess/thumb.jpg
background: "#18002E"
---
<intro>
I live programmed visuals for Electronic Sound Systems using <a href="https://github.com/hydra-synth/hydra">Hydra</a>, an incredible high-level javascript library that emulates modular synthesis by <a href="https://ojack.xyz/">Olivia Jack</a>. ESS's lineup featured DazeGxd and Jonny From Space among others, and ~250 people attended the club night at Underground Atlanta. My visuals were projected onto two surfaces for a six hour set, mixing live code with audio and video input.</intro>



<h3> a bit about my process</h3>

I shared my hydra code between two laptops connected via <a href= "https://munshkr.github.io/flok/">Flok</a>, a web based peer-to-peer code editor by munshkr. Each laptop had a different camera and Focusrite (audio) input, allowing me to create two different projections with a single script and compile them simultaneously. I also used geikha's hydra-blend library (ported from glsl-blend) to play with a variety of blend modes, and inserted plain glsl into a few of my more graphic effects. I prepared a good number of functions before the event, but ended up writing a lot of code live to make my visuals work with the live sounds and crowd. This was super cool because I got to improvise and follow my intuition on the spot!



<div class="video-grid">

  <div class="video-row">
    <div class="video-tile">
      <video controls playsinline preload="metadata">
        <source src="/images/ess/blackandgrey_small.mp4" type="video/mp4">
      </video>
    </div>
  <div class="video-tile">
      <video controls playsinline preload="metadata">
        <source src="/images/ess/lasers_small.mp4" type="video/mp4">
      </video>
    </div>
  </div>

  <div class="video-row">
    <div class="video-tile">
      <video controls playsinline preload="metadata">
        <source src="/images/ess/lasers2_small.mp4" type="video/mp4">
      </video>
    </div>
    <div class="video-tile">
      <video controls playsinline preload="metadata">
        <source src="/images/ess/starry_small.mp4" type="video/mp4">
      </video>
    </div>
  </div>

  <div class="video-row hz-pair">
    <div class="video-tile">
      <video controls playsinline preload="metadata">
        <source src="/images/ess/daze_small.mp4" type="video/mp4">
      </video>
    </div>
    <div class="video-tile">
      <video controls playsinline preload="metadata">
        <source src="/images/ess/daze2_small.mp4" type="video/mp4">
      </video>
    </div>
  </div>

  <div class="video-row hz-pair">
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

</div>

<br>


<div class="photo-grid" data-folder="/images/ess/" data-gallery="ess">
projector.jpg :: diy shower curtain projector
me.jpg :: I got to be on stage!!!
twoscreens.jpg :: the full setup 
rainbow.jpg :: 
zoom.jpg :: 
rainbow2.jpg ::
wrek.jpg :: 
</div>

</br>


<h3>HUGE thanks to Alex Tyler and Lance Lampert for putting this event on and trusting me with the visuals (and their massive help arranging and testing this hardware!), as well as the rest of the WREK team.</h3>



