---
title: ColorViz
year: 2024
affiliation: CS4460 Info Visualization Final
tools:
  - JavaScript
  - D3.js
keywords:
  - technical-art
order: 3
thumbnail: /images/colorviz/thumb.png

---

<intro>
ColorViz is an interactive color visualization tool that I created for my Intro to Info Viz final project at Georgia Tech. We were given full creative freedom in choosing what data to visualize, and I found myself drawn towards the color data of arbitrary images. K-means clustering allows a user to "clean" this data (using the <a href="https://www.npmjs.com/package/ml-kmeans"> ml-kmeans</a> library loaded via CDN), transforming complex images into interpretable color palettes. It is also just a nifty way to understand what k-means does through a playful interaction 🙂 I use D3's heatmap and chord diagram modules to display this data. 
</intro>

<div style="display: flex; justify-content: center;">
<iframe style="aspect-ratio: 16 / 9; width: 100% !important;"   src="https://www.youtube.com/embed/8N6TFADOR90" title="Simulated Ecologies Results" frameborder="0" allow=" autoplay; picture-in-picture" allowfullscreen sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>
</div>

<br>

<img src="/images/colorviz/diagram.png" alt="" style="width: 1000px;">
