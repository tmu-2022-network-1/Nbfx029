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
    if(window.innerHeight < scrollAnimationElm[i].getBoundingClientRect().top){
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
  end: 'bottom 200px',
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

gsap.to("#mado", {
  rotation: 30,
  duration: 2.5,
  scrollTrigger: {
    trigger: "#mado",
    start: 'top center',
    end: '+=500',
    markers: true,
  }
});

/*window.addEventListener('scroll', () => {
  let elem00 = document.getElementById('sign');
  let scrollY = window.scrollY/15;
  
  elem00.style.filter.blur =  scrollY + 'px';
});*/