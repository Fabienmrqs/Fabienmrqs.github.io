const moon = document.getElementById('moon');
const stars = document.getElementById('stars');
const h2 = document.getElementById('h2');
const btn = document.getElementById('btn');
const header = document.getElementById('header')
const mountainFront = document.getElementById('mountain_front');
const mountainBehind = document.getElementById('mountain_behind');

window.addEventListener('scroll',() => {
  const value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.05 + 'px';
  mountainBehind.style.top = value * 0.5 + 'px';
  mountainFront.style.top = value * 0 + 'px';
  h2.style.marginRight = value * 4+ 'px';
  h2.style.marginTop = value * 1.5+ 'px';
  btn.style.marginTop = value *1.5+ 'px';
  header.style.top = value * 1.05 + 'px';
} )
