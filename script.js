

var tl = gsap.timeline()
tl.from("#nav h2, #nav h5, #nav button ",{
    y:-300,
    stagger:0.2,
    duration:0.3,

})
tl.from("#page1 #img1 , #page1 #img2, #page1 #img3 ",{
    opacity:0,
    stagger:0.5,
})

tl.from("#page1 h2 ,#page1 h5",{

    x:-400,
    opacity:0,
    duration:2
})




gsap.from("#page2 h5, #page2 h2, #page2 h4",{
    opacity:0,
    stagger:1,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 h5",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 10%",
        scrub:1


    }
} )
gsap.from("#page3 .img",{
    opacity:0,
    duration:3 ,
    y:200,
    stagger:0.5,

    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 30%",
        scrub:5,
        
    }
})
gsap.to("#page1 #img1",{
    // top:"35%",
    y:300,
    duration:5,
    scrollTrigger:{
        // markers:true,
        trigger:"#page1 #img1",
        scroller:"body",
        start:"top 10%",
        end:"top 0%",
        scrub:5
    }

})
gsap.to("#page1 #img3",{
    // top:"35%",
    x:-170,
    duration:5,
    scrollTrigger:{
        // markers:true,
        trigger:"#page1 #img3",
        scroller:"body",
        start:"top 30%",
        end:"top 0%",
        scrub:5
    }

})



gsap.to("#page1 #img2",{
    // top:"35%",
    x:-170,
    duration:5,
    scrollTrigger:{
        // markers:true,
        trigger:"#page1 #img2",
        scroller:"body",
        start:"top 0%",
        end:"top -10%",
        scrub:5
    }

})






gsap.from("#page4 h2 , #page4 #brand",{
    opacity:0,
    stagger:1,
    duration:1,
    scrollTrigger:{
        trigger:"#page4 h2",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 10%",
        scrub:1


    }
} )
gsap.from("#prof",{
    opacity:0,
    stagger:1,
    // duration:1,
    scrollTrigger:{
        trigger:"#page4 h2",
        scroller:"body",
        // markers:true,
        start:"top 120%",
        end:"top 60%",
        scrub:1


    }
} )


gsap.from("#page7 #box",{
    opacity:0,
    x:200,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page7 #box",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:5,
        yoyo:true,
    }
})

gsap.from("#up",{
    opacity:0,
    y:100,
    scrollTrigger:{
        // markers:true,
        trigger:"#up",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }

})
gsap.from("#down",{
    opacity:0,
    duration:5,
    scrollTrigger:{
        // markers:true,
        trigger:"#down",
        scroller:"body",
        start:"top 88%",
        end:"top 100%",
        scrub:3,
    }

})
