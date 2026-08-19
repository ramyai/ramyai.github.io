---
title: In Between (PUP Short Film)
year: 2024
affiliation: Pixar Animation Studios
tools:
  - Nuke
  - Katana
  - Renderman

keywords:
  - technical-art
order: 3
thumbnail: /images/pupfilm/thumb.jpg
background: "#07011A"

---

<intro>
In Between is a short film made by me and eight other interns during the 2023 Pixar Undergraduate Program (PUP) Techincal Direction Internship. After two months of learning Pixar’s animation pipeline, we had two weeks to produce the film. Each intern took ownership over a part of the pipeline: I was responsible for preparing the lighting setup and render controls in Katana, and I ensured that our Nuke file’s organization and version-controls accommodated our dynamic production schedule. I also did the bulk of our compositing in Nuke, including painterly edge breakups and color-grading
</intro>

<h3> the film </h3>
<div style="display: flex; justify-content: center;">
<iframe style="aspect-ratio: 16 / 9; width: 100% !important;"   src="https://www.youtube.com/embed/2sHU-X3VzwY" title="Simulated Ecologies Results" frameborder="0" allow=" autoplay; picture-in-picture" allowfullscreen sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>
</div>

<br>
<h3> process </h3>


Before we could think about producing a film, all nine interns needed to decide on a story first. Our only parameters were that the short had to be ~30 seconds (though we got away with 60!) and include a visual transition. Davis, my coworker and good friend, proposed a commuter train passing through a tunnel, where the mood shifts and things get surreal. I loved this idea, not just because I also love rapid transit systems, but because it would let us explore this theme of ‘transience’. Sometimes, I get this sinking feeling that my life is just me switching from one thing to the next: moving across the country for school, chipping away at my CS degree, breaking for work and study abroad programs, and attempting to make art in between it all...this is a feeling all of us interns could relate to, and we wanted to capture it in our short. 

While the concept was still loose, I photobashed rough images of a woman on a train who allowed herself to be mesmerized by her journey. Even though it is worlds away from our final work, it shows our character’s transition from feeling indifferent to in awe of her surroundings, which became the core of our film.​​​​​​​

<div class="photo-grid" data-folder="/images/pupfilm/" data-gallery="pupfilm">
1.png :: 
2.png :: 
</div> 
<p class="caption">my early stage visual brainstorming for the short</p>


Once we locked in our story, there was another major thing we needed to settle on: style. Thankfully, we had a strong goal from the start, agreeing that we wanted to depart from Pixar’s classic look and create something painterly, inspired by Alberto Mielgo and upcoming animated features (Spiderverse and TMNT!). This was exciting because it was so different from what PUPs had done in the past, but also a massive undertaking, because it required lots of experimentation so the film could still be rendered through Pixar’s pipeline. To help us through this process, our mentors allocated two weeks for look-dev tests, and pulled in lots of TDs to consult on our visual goals. Pixar TD Colin Thompson came in to explain how he composited painterly effects for Out, a SparkShort; and I had my ‘aha!’ moment. This was during my first week using Nuke, and I was amazed by the flexibility and art direction that could be achieved in post. Since other interns had already began shading and modeling tests, I decided to dedicate my time to comp look-dev, working off of Thompson’s approach to stylized edges. Here is one of my tests on the train scene from Luca.



<img src="/images/pupfilm/3.gif" alt="" style="width: 100%;">
<p class = "caption">one of my many look-dev tests! (this was the coolest looking one)</p>

Synthesizing my discoveries from look-dev week with our visual goals as a group, I also created the light/comp style guide.

<div class="photo-grid" data-folder="/images/pupfilm/" data-gallery="pupfilm">
4.png
</div>


Before we knew it, it was time for our two weeks of production. Since I knew I wanted to work on compositing for the short, I first got started in Katana, creating about 7 render layers per shot so I had plenty to work with in Nuke, and organizing production level and shot specific lighting contexts. Because we were on a tight timeline, everyone was constantly creating assets and updating our shots in a very non-linear fashion, but it was still important for us to see everything rendered in context daily so we could evaluate our progress, even if things were unfinished. Since my work was downstream, it became my responsibility to troubleshoot these daily renders and shuffle things around in Katana or Nuke when assets inevitably disappeared, or did not update. ​​​​​​​

<div class="photo-grid" data-folder="/images/pupfilm/" data-gallery="pupfilm">
5.png
</div>
<p class = "caption">our dailies board with only one week to go- there was still lots to do!</p>

While I was eager to work on compositing right away, configuring our lighting system and ‘babysitting’ renders took up all my time during the first half of production. Before finally digging into comp work, I took a whole day to rework our Nuke file with a clean vertical tree that pulled in all our render layers + AOVs, with Perforce backed live groups for localized version control. At the time, I questioned if all this overhead was even necessary, but it turned out that it was absolutely the right call: on the final day of production at the very last hour, the Nuke file got corrupted and we were unable to render. With the help of some awesome Pixar folks, I was able to revert back to an older version, and recover all the lost work because of the protective measures I took organizing the file. While it was super stressful at the time, this was a great lesson on the importance of thoughtful file organization. Below are some of my final comp breakdowns!

<div class="photo-grid" data-folder="/images/pupfilm/" data-gallery="pupfilm">
6.png
7.png
</div>

<h3> recorded comp breakdowns </h3>


 <div class="video-tile">
      <video controls playsinline preload="metadata">
        <source src="/images/pupfilm/8.mp4" type="video/mp4">
      </video>
  </div>

  <div class="video-tile">
    <video controls playsinline preload="metadata">
      <source src="/images/pupfilm/9.mp4" type="video/mp4">
    </video>
  </div>

  <div class="video-tile">
  <video controls playsinline preload="metadata">
    <source src="/images/pupfilm/10.mp4" type="video/mp4">
  </video>
</div>


<h3> THANK YOU to my fellow PUPs: Ross Altenberg, Ivery Chen, Davis Jackson, Ausar Johnson,  Sherry Li, Bianca Rawlings, Kiki Spencer and Sarah Wang for teaching me so much and being amazing coworkers + friends. And of course, a huge thanks to the many Pixar TDs who generously gave us their time and support! </h3>