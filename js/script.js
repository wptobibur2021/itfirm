//responsiv carosel
$('.owl-carousel2').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        
    }
})
$('.owl-carousel1').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
})


// nave link active
const elements = document.querySelectorAll('.nav-link');
for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove('activated');
    elements[i].onclick = function (event) {
        console.log("ONCLICK");
        //remove all activated class
        removeClass();
        if (event.target.innerHTML === this.innerHTML) {
            this.classList.add("activated");
        }
    }
}
function removeClass(){
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('activated');
    }
}


const nav = document.querySelector('.top-nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-blue-transparent', 'shadow');
        nav.classList.remove('bg-SteelBlue', 'shadow');
    } else {
        nav.classList.remove('bg-blue-transparent', 'shadow');
        nav.classList.add('bg-SteelBlue', 'shadow');
    }
});