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

for(var i = 0; i < 10; i++){
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
  x: "random(200, 1500, 10)",
  y: "random(200, 800)",
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
    stagger: 0.3,
    x: "random([-400, -200, 200, 400])"
  })
})

/*window.addEventListener('scroll', () => {
  let elem00 = document.getElementById('sign');
  let scrollY = window.scrollY/15;
  
  elem00.style.filter.blur =  scrollY + 'px';
});*/

for(var i = 0; i < 5; i++){
  var newDiv = document.createElement("div");
  newDiv.textContent = '谷';
  newDiv.id = ('tani');
  
  var parentDiv = document.getElementById("taniSpawner");
  parentDiv.insertBefore(newDiv, parentDiv.firstChild);
  }

for(var i = 0; i < 5; i++){
var newDiv = document.createElement("div");
newDiv.textContent = '.:*ゅゆ';
newDiv.id = ('silverFish');

var parentDiv = document.getElementById("spawner");
parentDiv.insertBefore(newDiv, parentDiv.firstChild);
}

