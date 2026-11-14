(function(){
  var hamb=document.getElementById('hamb'),nav=document.getElementById('navLinks');
  if(hamb&&nav){hamb.addEventListener('click',function(){var o=nav.classList.toggle('open');hamb.setAttribute('aria-expanded',o?'true':'false');hamb.textContent=o?'✕':'☰';});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');hamb.textContent='☰';hamb.setAttribute('aria-expanded','false');}});}
  var yr=document.getElementById('yr');if(yr){yr.textContent=new Date().getFullYear();}
})();
