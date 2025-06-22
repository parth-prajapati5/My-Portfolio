

let tl=gsap.timeline();
tl.to(".back img",{ //this is for  360 rotate
    duration:8,
    rotate:360,
    repeat:-1,
},"same");
tl.to(".back img",{ //this is for glow and low 
    opacity:1,
    duration:2,
    repeat:-1,
    yoyo:true,
},"same");

let t1 = gsap.timeline({ repeat: -1 ,yoyo:true});

// First div glows and dims
t1.to(".one-2 .div1", {
  duration: 1,
  opacity: 1,
})

// Then second div glows and dims
.to(".one-2 .div2", {
  duration: 1,
  opacity: 1,
})

t1.to(".one-3 .one-3-1",{
    duration:0.5,
    opacity:1
})

.to(".one-3 .one-3-2",{
    duration:0.5,
    opacity:1
})


const bar = document.querySelector('.bar');
const barIcon = bar.querySelector('i');
const links = document.querySelector('.links');

bar.addEventListener('click', () => {
  links.classList.toggle('active');
  const isOpen = links.classList.contains('active');

  if (isOpen) {
    barIcon.classList.remove('fa-bars');
    barIcon.classList.add('fa-xmark');
    document.body.style.overflow = 'hidden';
  } else {
    barIcon.classList.remove('fa-xmark');
    barIcon.classList.add('fa-bars');
    document.body.style.overflow = 'auto';
  }
});

// Close menu on link click
document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('active');
    barIcon.classList.remove('fa-xmark');
    barIcon.classList.add('fa-bars');
    document.body.style.overflow = 'auto';
  });
});



