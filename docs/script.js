window.addEventListener('scroll', () => {
    let elem00 = document.getElementById('kao00');
    let elem01 = document.getElementById('kao01');
    let scrollY = window.scrollY/15;
    let scrollYopacity = window.scrollY/2000;
    
    elem00.style.height =  scrollY + '%';
    elem00.style.width =  scrollY + '%';
    elem00.style.opacity = 1 - scrollYopacity;
    
    elem01.style.height =  -100 + scrollY + '%' ;
    elem01.style.width =  -100 + scrollY + '%';
    elem01.style.opacity = 1.5 - scrollYopacity;
  });