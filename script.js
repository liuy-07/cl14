document.querySelectorAll('.butterfly').forEach(function (el) {
  el.style.left=(Math.random()*700)+"px";
el.style.top=(Math.random()*500)+"px";

el.addEventListener("mouseover",function(){
  el.style.left=(Math.random()*700)+"px";
el.style.top=(Math.random()*500)+"px";
});
});

document.querySelectorAll('.foo').forEach(function (el) {
  el.style.left=(Math.random()*490+360)+"px";
el.style.top=(Math.random()*125+195)+"px";

el.addEventListener("mouseover",function(){
  el.style.left=(Math.random()*490+360)+"px";
el.style.top=(Math.random()*125+195)+"px";
});
});