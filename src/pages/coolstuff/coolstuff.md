---
title: VISIONS FROM THE MULTIVERSE
layout: layouts/home.njk
eleventyNavigation:
  key: Traverse the Multiverse
  order: 6
---
# A peek into my browser bookmarks. 
## (remember to scroll down)
<span style="font-size: 4pt;">Disclaimer: the following links do not constitute legal or medical advice. The author waives responsibility for any potential damage to you or your cat should you choose to educate yourself on random topics.</span>

{% set arrayBookmarks = [
  'https://en.wikipedia.org/wiki/Flatulence', 
  'https://www.youtube.com/watch?v=sHvUU8OWTC4', 
  'https://en.wikipedia.org/wiki/Taumatawhakatangi%C2%ADhangakoauauotamatea%C2%ADturipukakapikimaunga%C2%ADhoronukupokaiwhen%C2%ADuakitanatahu', 
  'https://security.stackexchange.com/questions/172212/how-do-mobile-carriers-know-video-resolution-over-https-connections', 
  'https://hannahmontana.sourceforge.net/about.html', 
  'https://www.youtube.com/watch?v=Y-rmzh0PI3c']
%}
<div id="carouselExample" class="carousel slide carousel-fade container-fluid"  data-bs-ride="carousel">
  <div class="carousel-inner">
  <div class="carousel-item active"> {# need at least 1 active item; we can iterate the rest#}
       <iframe src="https://www.isittoolateforcoffee.com/" title="http://www.isittoolateforcoffee.com/" class="container-fluid" height="1000px"></iframe> 
  </div>
  {% for bookmark in arrayBookmarks %}
    <div class="carousel-item">
      <iframe src="{{bookmark}}" class="container-fluid" height="1000px" loading="lazy"></iframe> {# read that lazy loading is a good idea, for my use case #}
    </div>
  {% endfor %}
  </div>
  <button class="carousel-control-prev bg-dark" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next bg-dark" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
