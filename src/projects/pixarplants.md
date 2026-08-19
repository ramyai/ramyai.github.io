---
title: Hand Painted Plant Tool
year: 2023
affiliation: Pixar Animation Studios
tools:
  - Houdini
  - Python
  - RenderMan
keywords:
  - featured
  - technical-art
  
  
order: 1
thumbnail: /images/pixarplants/thumbnail.png
background: "#4A5900"
---


<intro>
This is my independent project for the Pixar Undergraduate Program (Technical Direction) Internship. I had two weeks to develop and present an original idea to ~100 Pixar employees. I came up with Hand-Painted Plants: an exploration into procedural systems for artistic flow. I only had one week of experience with Houdini prior to this project, but with a well-scoped plan and the help of some amazing mentors, I created a workflow I’m proud of and had lots of fun in the process!</intro>

<video class = "video" autoplay loop muted playsinline>
  <source src="/images/pixarplants/plantgif.mp4" type="video/mp4";>
</video>

<h3> first, some words on artistic flow</h3>

Artistic flow is the mental state of being completely present and immersed in a task. While the presence of flow is medium-agnostic, it looks and feels very different for a technical director (TD) than a traditional artist. Where a painter’s focus would be on tactility and craft, a TD must engineer or utilize complex systems with a visual target in mind. This requires a lot of context switching, and it can get in the way of artistic "flow". Even something as simple as scaling and placing foliage in a shot requires testing different numerical inputs, scattering points, switching between cameras, tumbling in worldspace, etc. While this allows for lots of precision, an illustrator can be just as precise in 2D, painting plants with ease. I wanted to pose the question: can this kind of flow, with the tactility and visual feedback of a paintbrush, be possible in 3D?

Inspired by workflows that combine Blender’s Grease Pencil with Geometry nodes, I set out to create a responsive curve-driven system in Houdini, a software that already has a place in Pixar’s pipeline. I knew I didn’t want to just engineer a workflow, but exercise my artistic intuition and create beautiful images. To accomplish all of this at once, I needed a strong but accessible visual target: I found illustrator Taehyoung Jeon (@marimarijeon) on Instagram, and was captivated by her meditative and simple foliage illustrations. With her art as my reference, I was able to create my first plant:



<h3> Succulent </h3>

<video class = "video" autoplay loop muted playsinline controls>
  <source src="/images/pixarplants/Cactus_Vidsmall.mp4" type="video/mp4">
</video> <p class="caption">live viewport screen-recording in Houdini</p>


<img src="/images/pixarplants/cactus.jpg" alt="" style="width: 280px;">
<p class="caption">final 3D illustration rendered with Renderman</p>

<br>

The mechanics behind my tool are actually quite simple: I performed distance calculations on the pre-existing DrawCurve function to snap curves drawn in the viewport to a point selection of my choosing. The curve is automatically aligned to the screen plane, and gets translated to an expected location relative to where the user first clicks. 

<img src="/images/pixarplants/davis.jpg" alt="">
<p class="caption">my friend Davis, my early-stage plant tool, and my very messy desk</p>

I’ve included a photo of my fellow PUP intern, Davis, playing with this mechanism on day 2 of this project, to highlight the immediate feedback I got from Houdini's viewport. I asked everyone who came into our classroom if they wanted to draw a plant, and their reactions to how my tool actually felt to use was energizing and convinced me that I was on the right track.

While I could have invested time into creating a sophisticated curve snapping function that utilized rays and screen-space calculations, I was satisfied by the minimum threshold of feedback from my rather naive method. I was intentional about addressing the technical problem behind my workflow quickly, because it allowed me to start the fun parts of my project (more plants!) right away. Here is what I came up with 🌱

<br>

<h3> Clover </h3>

<video class = "video" autoplay loop muted playsinline controls>
  <source src="/images/pixarplants/Clover_Vidsmall.mp4" type="video/mp4">
</video>

<img src="/images/pixarplants/clover.jpg" alt="" style="width: 320px;">

<br>


<h3> Pitcher Plant </h3>

<video class = "video" autoplay loop muted playsinline controls>
  <source src="/images/pixarplants/Pitcher__Vidsmall.mp4" type="video/mp4">
</video>
<p class="caption"> I had a lot of fun playing with the orientation of the pitchers using my mouse.</p>


<img src="/images/pixarplants/pitcher.jpg" alt="">

<br>


<h3> Wildflower </h3>

<video class = "video" autoplay loop muted playsinline controls>
  <source src="/images/pixarplants/Flowers_Vidsmall.mp4" type="video/mp4">
</video>

<img src="/images/pixarplants/flower.jpg" alt="">

<br>


<h3> Mushrooms </h3>

<video class = "video" autoplay loop muted playsinline controls>
  <source src="/images/pixarplants/Mushroom_Vidsmall.mp4" type="video/mp4">
</video>

<video class = "video" autoplay loop muted playsinline controls>
  <source src="/images/pixarplants/Mushroom_Paint.mp4" type="video/mp4">
</video>
<p class="caption">playing with the spraypaint node for an extra layer of control + interactivity</p>


<img src="/images/pixarplants/shroom.jpg" alt="">

<br>

<h3> Putting it all together </h3>

<img src="/images/pixarplants/alltogether.jpg" alt="">
<p class="caption">final rendered illustration</p>


I also wanted to create an image with all of my plants together in context. I did this at the absolute last minute, and only had a few hours to go from a blank viewport to this full scene. Thankfully, I was able to work rapidly and lean into the joy of “painting” in all my plants. Being able to freely setdress in a way that followed my artistic intuition was a very satisfying way to evaluate my workflow.

<img src="/images/pixarplants/clay.jpg" alt="">
<p class="caption">clay render</p>

Here is a clay render to highlight my stylization technique. I did not use any image textures, so the painterly shading is all achieved on the SOPs (surface geometry) level, hence the weird bumps and noise patterns on my topology. While this approach is not super efficient as it requires high resolution geometry, this enabled me to hit my visual target in the viewport itself.

<video class = "video" autoplay loop muted playsinline controls>
  <source src="/images/pixarplants/In_Context.mp4" type="video/mp4">
</video>
<p class="caption">
live screen recording of me setdressing my scene
</p>

Finally, here is a recording of me setdressing to show how this workflow enables me to work in a shot-specific context. After viewing a demo, a set dressing TD mentioned that they wanted to open up a USD scene file with a locked-in camera and use my tool to draw in finishing details, rather than placing objects by hand, which got me really excited as that was a use case I considered but was unsure if artists would actually want. I am also curious about how this workflow could enhance other applications where curves are involved, whether that is FX, procedural modeling, or something else entirely. Of course- I need way more than two weeks for this type of speculation, so these are all things I hope to revisit at a later time!

A huge shout out to all my mentors for their support during the two weeks spent on this project. I opened up Houdini for the first time this summer, and while it was an uphill battle to gain intuition in the software, I had help every step of the way. 

<h3><b>THANK YOU!</b></h3>

<h3>
Mike Ravella
</h3>

<h3>
Jeremy Paton
</h3>

<h3>
Michael Frederickson
</h3>

<h3>
Laura Murphy
</h3>

<h3>
Leo Ko
</h3>

<h3>
Alyssa Minko
</h3>





</div>



<!-- 
<div class="image-row">
  <img src="/images/come-sit-1.jpg" alt="">
  <img src="/images/come-sit-2.jpg" alt="">
  <img src="/images/come-sit-3.jpg" alt="">
</div> -->
