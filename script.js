let tl = gsap.timeline();
tl.from('#logo , #nav li , #menu h3 , #menu button', {
     y : -80,
     duration : 1,
     stagger : 0.3
})

tl.from('#text h1' , {
   y : 50 ,
   duration : 1 ,
   stagger : 0.5 ,
   opacity : 0 ,
   stagger : 0.5
})

tl.from('#img img' , {
    scale : 0,
    opacity :  0 ,
    stagger : 0.5
})

tl.from('#hook , #hook span' , {
    y : 50 ,
   duration : 1 ,
   stagger : 0.5 ,
   opacity : 0 ,
   stagger : 0.5
})

tl.from('#company img' , {
    scale : 0,
    opacity :  0 ,
    stagger : 0.5
})

tl.from('#scroll h2' , {
    y : -50,
    repeat : -1 ,
    duration : 1 ,
    yoyo : true ,
    stagger : 1 ,
    opacity : 0

})