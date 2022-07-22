/*var scrollAnimationElm = document.querySelectorAll('.sa');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + 100) {
      scrollAnimationElm[i].classList.add('show');
    }
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + 700) {
      scrollAnimationElm[i].classList.add('show');
    }
    
    if(window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + 750){
      scrollAnimationElm[i].classList.remove('show');
    }
    if(window.innerHeight < scrollAnimationElm[i].getBoundingClientRect().top + 50){
      scrollAnimationElm[i].classList.remove('show');
    }
    
  }
}
window.addEventListener('scroll', scrollAnimationFunc);
*/

const pageTopBtn = document.getElementById('title');
pageTopBtn.addEventListener("click", function () {
  const me = arguments.callee;
  const nowY = window.pageYOffset;
  window.scrollTo(0, Math.floor(nowY * 0.9));
  if (nowY > 0) {
    window.setTimeout(me, 10);
  }
});

ScrollTrigger.create({
  trigger: '.signTrigger',
  start: '700px center',
  once: true,
  toggleClass: {targets: "#sign", className: "appear"},
});

ScrollTrigger.create({
  trigger: '#sora',
  start: 'top 800px',
  end: 'bottom 200px',
  toggleClass: {targets: "#sora", className: "show"},
});


ScrollTrigger.create({
  trigger: '#mado',
  start: 'top 800px',
  end: 'bottom top',
  toggleClass: {targets: "#mado", className: "show"},
});

gsap.to("#title",{
  autoAlpha: 0.7,
  x: -230,
  y: -250,
  scale: 0.2,
  scrollTrigger:{
    trigger: "#titleTrigger",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
})

var sw = document.body.offsetWidth;
let client_w = document.getElementById('title').clientWidth;
gsap.to("#title",{
  autoAlpha: 1,
  x: sw/2 - client_w/2,
  y: 150,
  scale: 2.0,
  scrollTrigger:{
    trigger: "#titleEnd",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: true
  }
})

gsap.to(".signTrigger",{
  x: 600,
  scrollTrigger:{
    trigger: "#titleTrigger",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
})

gsap.to(".book",{
  x: -600,
  scrollTrigger:{
    trigger: "#titleTrigger",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
})

gsap.to("#blackBox",{
  y: 600,
  scrollTrigger:{
    trigger: "#blackBox",
    start: "top bottom",
    end: "bottom top",
    scrub: 0.5,
  }
})

gsap.to("#blackBoxLeft",{
  y: 1500,
  scrollTrigger:{
    trigger: "#blackBoxLeft",
    start: "top top",
    end: "bottom top",
    scrub: 0.5,
  }
})

gsap.to("#hu", {
  autoAlpha: 1,
  x: 20,
  rotation: 30, 
  duration: 2,
  scrollTrigger: {
    trigger: "#hu",
    start: 'top center',
    end: '+=500',
    scrub: true
  }
});

gsap.to("#huRight", {
  autoAlpha: 1,
  x: -20,
  rotation: -30, 
  duration: 2,
  scrollTrigger: {
    trigger: "#huRight",
    start: 'top center',
    end: '+=500',
    scrub: true
  }
});

/*
gsap.to("#mado", {
  rotation: 30,
  duration: 2.5,
  scrollTrigger: {
    trigger: "#mado",
    start: 'top center',
    end: '+=500',
    markers: true
  }
});
*/

for(var i = 0; i < 30; i++){
  var newDiv = document.createElement("div");
  newDiv.textContent = '囧';
  newDiv.id = ('jiong');
  
  var childDiv = document.createElement("div");
  childDiv.textContent = '水';
  childDiv.id = ('water');

  var element = document.getElementById("spawner");
  document.body.insertBefore(newDiv, element);

  newDiv.insertBefore(childDiv, newDiv.firstChild);
}

gsap.to("#jiong",{
  duration: 4,
  ease: "slow(1, 1, false)",
  x: "random(200, 1600, 10)",
  y: "random(-400, 800)",
  scrollTrigger:{
    trigger: "#jiong",
    toggleActions: 'play reverse play reverse',
    start: 'top center',
    end: '+=1100px',
  }
});

document.querySelector('.start').addEventListener('click',()=>{
  gsap.to('#top, #bottom',{
    duration: 0.3,
    stagger: 0.2,
    x: "random([-400, -200, 200, 400])"
  })
})

const nigeru_anime = gsap.timeline({
  scrollTrigger:{
    trigger: "#nigeru",
    start: "-500px center",
  }
});

nigeru_anime.to('#nigeru',{
  keyframes: [
    {duration: 1, x: -50},
    {duration: 0.5, x: 1000}
  ]
})
/*window.addEventListener('scroll', () => {
  let elem00 = document.getElementById('sign');
  let scrollY = window.scrollY/15;
  
  elem00.style.filter.blur =  scrollY + 'px';
});*/

for(var i = 0; i < 7; i++){
  var newDiv = document.createElement("div");
  newDiv.textContent = '谷';
  newDiv.id = ('tani');
  newDiv.className = ('fallen')
  
  var parentDiv = document.getElementById("taniSpawner");
  parentDiv.insertBefore(newDiv, parentDiv.firstChild);
}

var tani = document.getElementsByClassName("fallen");
var sw = document.body.offsetWidth;
for(var i = 0; i < tani.length; i++){
  tani[i].style.fontSize = Math.floor( Math.random() * (151 - 50) ) + 50 + "px";
  tani[i].style.left = Math.floor( Math.random() * sw)  + "px";
}

/*gsap.to('#tani',{
  duration: 1,
  opacity: 1,
  scrollTrigger:{
    trigger: '#taniSpawner',
    start: 'top bottom',
  }
});
*/

gsap.to('#taniSpawner',{
  y: -600,
  scrollTrigger:{
    trigger: '#taniSpawner',
    start: 'top bottom',
    end: '+=1000px',
    scrub: 0.3,
  }
});

document.querySelector('#sign').addEventListener('click',()=>{
  gsap.to('.reverse',{
    duration: 1,
    rotate: 180
  })
});

gsap.to('.first',{
  y: -2000,
  autoAlpha: 0,
  duration: 2,
  scrollTrigger:{
    trigger: '.first',
    start: 'top bottom',
    end: 'bottom top',
  }
});

gsap.to('.second',{
  y: -2000,
  autoAlpha: 0,
  duration: 2,
  scrollTrigger:{
    trigger: '.second',
    start: 'top bottom',
    end: 'bottom top',
  }
});

/*
for(var i = 0; i < 4; i++){
  var newDiv = document.createElement("div");
  newDiv.textContent = '益';
  newDiv.id = ('eki');
  newDiv.className = ('walk')
  
  var parentDiv = document.getElementById("ekiSpawner");
  parentDiv.insertBefore(newDiv, parentDiv.firstChild);
}
*/

var tani = document.getElementsByClassName("eki");
var sw = document.body.offsetWidth;
for(var i = 0; i < tani.length; i++){
  tani[i].style.fontSize = Math.floor( Math.random() * (101 - 50) ) + 50 + "px";
}

gsap.to('.topRight',{
  x: -60,
  y: 60,
  autoAlpha: 1,
  scrollTrigger:{
    trigger: '#titleEnd',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 0.8
  }
});

gsap.to('.topLeft',{
  x: 60,
  y: 60,
  autoAlpha: 1,
  scrollTrigger:{
    trigger: '#titleEnd',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 0.8
  }
});

gsap.to('.bottomRight',{
  x: -60,
  y: -60,
  autoAlpha: 1,
  scrollTrigger:{
    trigger: '#titleEnd',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 0.8
  }
});

gsap.to('.bottomLeft',{
  x: 60,
  y: -60,
  autoAlpha: 1,
  scrollTrigger:{
    trigger: '#titleEnd',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 0.8
  }
});