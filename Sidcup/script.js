// var cursor = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (debts) {
    cursor.style.left = debts.x +30 + "px"
    cursor.style.top = debts.y + "px"
    blur.style.left = debts.x - 150 + "px"
    blur.style.top = debts.y - 150 + "px"

})

var h4_all = document.querySelectorAll("#nav h4")
h4_all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale = 3
        cursor.style.border = "0.5px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"
    })
    
})




gsap.to("#nav", {
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in", {
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4, // 0.4s delay between each element
    scrollTrigger: {
        trigger:"#about-us",
        scroller: "body",
       // markers : true,
        startpoint: "top 70%",
        end: "end 65%",
        scrub : 1

}
})

gsap.from(".projects", {
    scale : 0.8,
    opacity:0,
    duration:1,
    stagger:0.1, // 0.4s delay between each element
    scrollTrigger: {
        trigger:".projects",
        scroller: "body",
        //markers : true,
        startpoint: "top 70%",
        end: "end 65%",
        scrub : 1

}
})

gsap.from("#colon1", {
    y : -70,
    x : -70,
    scrollTrigger : {
        trigger : "#colon1",
        scroller : "body",
        //markers : true,
        start : "top 55%",
        end : "top 45%",
        scrub : 1
    }
})

gsap.from("#colon2", {
    y : 70,
    x : 70,
    scrollTrigger : {
        trigger : "#colon1",
        scroller : "body",
       // markers : true,
        start : "top 55%",
        end : "top 45%",
        scrub : 1
    }
})
gsap.from("#page4 h1", {
    y : 50,
    scrollTrigger : {
        trigger : "#page4 h1",
        scroller : "body",
      //  markers : true,
        start : "top 75%",
        end : "top 70%",
        scrub : 2
    }

})