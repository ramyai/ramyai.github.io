---
title: Sanctuary
year: 2023
affiliation: Glasgow School of Art classwork
tools: 
    - Unity
    - Cinema 4D
keywords: 
    - technical-art
  
order: 8
thumbnail: /images/sanctuary/4.png
background: "#4E3451"
---

<intro>
I created Sanctuary for my ISD2-A (Sound Design in Unity) unit while studying abroad at the Glasgow School of Art’s School of Simulation and Visualization. The brief asked us to populate a premade layout with audio-visual interactions, but since this was my first time working with a game engine, I wanted to take it one step further and build a custom environment as well. The learning curve for Unity was steep, and we only had three weeks to work on the project, but I gave it my all and assembled an imperfect(!) project that I’m still very proud of. 

Sanctuary pulls inspiration from contemporary art spaces and new-wave spiritualism to create a surreal audio-visual experience.

</intro>

<h3> Walkthrough <h3>
<div class="video-tile">
      <video controls playsinline preload="metadata">
        <source src="/images/sanctuary/sanctuary.mp4" type="video/mp4">
      </video>
</div> <p class="caption"></p>

<h3> Unedited In-Game Screenshots <h3>

<div class="photo-grid" data-folder="/images/sanctuary/" data-gallery="sanctuary">
4.png :: 
2.png :: 
</div>
<p class="caption"></p>

<div class="photo-grid" data-folder="/images/sanctuary/" data-gallery="sanctuary">
3.png :: 
1.png :: 
</div>
<p class="caption"></p>

<h3> Process </h3>

When I first learned that we would be using premade layouts for my first project at the Glasgow School of Art, I had mixed feelings. I was relieved that I would have access to high quality assets and could focus on learning Unity instead of asset creation, but I was also worried that I wouldn’t get much experience with environment design and art direction, two major goals I have for the semester. Even though the focus of this assignment was on audio immersion, I was really excited once I found out that layout alterations, new features, and general experimentation were also expected per the project brief. 

Balancing the project’s main requirement of an immersive audio experience with my desire to learn about other aspects of the Unity pipeline posed a big challenge. The premade layouts we got to choose from were really large and full of detail, so I knew I wanted to simplify my chosen scene so I could focus on quality over quantity. I chose the Snaps HD Carpark layout, as it had all the building blocks I needed to repurpose the space into something more compact and intimate. Because I didn’t want to spend too much time creating detailed assets from scratch, I decided to pull inspiration from contemporary art galleries and design a space that could showcase abstract, organic work.​​​​​​​

<img src="/images/sanctuary/5.jpg" alt="" style="width: 600px;">
<p class="caption">sources of inspiration</p>

My final idea was to deconstruct the Carpark and convert it into a grungy modern art space with a surrealist soundscape. I referenced both physical galleries and digital games/renders to flesh out my vision. Since the project brief was about sound design, I started a preliminary search for ambient clips on Soundsnap using keywords such as “electronic,” “meditation,” and “experimental,” but dedicated the majority of my time to orienting myself in Unity. I spent the first week tearing down the car park and assembling prefab tiles and lights into a room, which was a great way to learn the basics. I preserved the open-roof from the original layout to give the space more depth and added windows so I could use them for a sound interaction.

<img src="/images/sanctuary/6.jpg" alt="" style="width: 600px;">
<p class="caption">first iteration of gallery layout</p>

To make the lighting suited for a small space, I deleted almost all of the lights (excluding the LEDs) and relit the scene with an HDRP Light Volume following this <a href="https://www.youtube.com/watch?v=yqCHiZrgKzs">tutorial</a> tutorial.

<img src="/images/sanctuary/7.jpg" alt="" style="width: 600px;">
<p class="caption">relit scene</p>

Something that caught my attention with Light Volumes was that I could have multiple volumes with unique HDRI textures in a scene and easily switch between them, altering the mood and atmosphere of the room. I assembled saturated, hyperreal day and night environments powered by HDRIs, and sourced sound to match their appearance.

<img src="/images/sanctuary/8.jpg" alt="" style="width: 600px;">
<p class="caption">the original HDRIs (left) and my edited versions (right)</p>

I attached these HDRIs to light volumes located near the windows in the room, which are triggered by the position of the player. The ambience and music could then change depending on what environment was active at a given moment.

<img src="/images/sanctuary/9.jpg" alt="" style="width: 600px;">
<p class="caption"></p>

Apart from the windows, another audio effect I wanted to add was a transition in audio from walking on concrete into grass, so I added a Unity terrain asset.

<img src="/images/sanctuary/10.jpg" alt="" style="width: 600px;">
<p class="caption">fresh grass in my ennvironment!</p>

I also began to think critically about symmetry and the player’s movement within the space, and after lots of shuffling around, created a finalized floor plan.

<img src="/images/sanctuary/11.jpg" alt="" style="width: 600px;">
<p class="caption">birds-eye view of my rough layout</p>

After feeling more comfortable with my layout, I transitioned to editing my audio clips so they were game-ready. I had been actively compiling sounds and music while building my scene, so I already had most of my assets on hand. I found it quite straightforward to balance/treat the audio, but I ran into an issue with looping: while I set up my loops per the instructions from our lecture, I could not get rid of the ‘click’ noise when I played back the files in Audition.

I eventually gave up and exported my audio as .wav files, and when I played those files back, the click disappeared! This was a great lesson in tradeoffs between quality and compression. Even though our teacher originally advised us to use .mp3s for longer audio clips, I opted to keep everything as .wav’s as the saved memory was not worth the degraded audio.
Finally, it was time to put my audio in my scene. The biggest challenge would be switching out my audio and enabling the light volumes simultaneously. I originally had my light volume triggered by multiple colliders, but their positions crashed my game upon build.

<img src="/images/sanctuary/15.jpg" alt="" style="width: 600px;">
<p class="caption">my original (failed) collider configuration</p>

Even though this error came up during the final week (last minute as always :')), I knew I needed to change my approach. I learned about 'lerping' from some of my more experienced game-dev peers, allowing me to change the light volume’s  intensity and corresponding audio volume gradually, resulting in a much smoother transition. 

<img src="/images/sanctuary/16.jpg" alt="" style="width: 600px;">
<p class="caption">my simple lerp script</p>

Finally, it was time to fill my room with more assets and audiovisual effects. I added water, abstract sculptures I modeled with C4D, and my favorite effect: an archway with animated colors. I wanted the archway to gradually change with the music, so I wrote another lerp script to pull this off. It was challenging working with so many materials, and since I was on such a time crunch, I did not wrote the code in the most optimal way (I used a 12-parameter switch statement!), but I am satisfied with the final effect. 

<img src="/images/sanctuary/17.jpg" alt="" style="width: 600px;">
<p class="caption">my simple lerp script</p>

Finally, on deadline day, I made sure all my audio assets were connected to the correct mixers and adjusted the audio levels until everything blended together the way I wanted it to. I ended up naming my final project “sanctuary” because I felt like the space had a soothing, safe quality to it.  While I am really happy with the visual appearance, I do wish I spent an extra day or two focusing on just sound design, as there are a few transitions I think could be more polished and some of the audio was chosen hastily. Regardless, I am proud of how much I’ve learned in just a few weeks and I think this project was the perfect way to take my first shot at realtime development. 

Thanks for reading about my process! 😊
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


<!-- <div class="photo-grid" data-folder="/images/doodles/" data-gallery="doodles">
4.png :: 
2.png :: 
3.png :: 
1.jpg :: 
</div>
<p class="caption"></p> -->

<!-- <img src="/images/pixarplants/cactus.jpg" alt="" style="width: 280px;">
<p class="caption"></p> -->