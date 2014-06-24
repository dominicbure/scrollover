scrollover effects
==================

Make CSS animations scroll activeted.

Usage
-----
```html
<style>
@import url("animate.css");

.skrollr{
	x-animation-scroll: vertical;
}
</style>
<div style="height:50%"><div>
<h1 class="skrollr rotateIn">Scroll Over</h1>

<style>
/* animate.css ( http://daneden.github.io/animate.css/ ) */

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

.rotateIn {
  animation-name: rotateIn;
}
</style>
```

Based on [skrollr-stylesheets](https://github.com/Prinzhorn/skrollr-stylesheets)
