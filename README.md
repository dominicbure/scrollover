scrollover effects
==================

Make CSS animations scroll activated.

Usage
-----
```html
<style>
@import url("animate.css");

.onscroll{
	x-animation-scroll: vertical;
}
</style>
<div style="height:50%"><div>
<h1 class="onscroll rotateIn">Scroll Over</h1>


<style>/* animate.css ( http://daneden.github.io/animate.css/ ) */
.rotateIn {
  animation-name: rotateIn;
}

@keyframes rotateIn {
  0% {
    transform-origin: center center;
    transform: rotate(-200deg);
    opacity: 0;
  }

  100% {
    transform-origin: center center;
    transform: rotate(0);
    opacity: 1;
  }
}
</style>
```
Demo
-----
http://prinzhorn.github.io/skrollr/


Based on [skrollr-stylesheets](https://github.com/Prinzhorn/skrollr-stylesheets)
