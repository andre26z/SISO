document.addEventListener("DOMContentLoaded" , function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50 ) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';

        } else{
            document.getElementById('navbar_top').classList.remove('fixed-top');
            document.body.style.paddingTop = 0;
        }
    });


});

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("novobar").style.padding = "15px 10px";
//     document.getElementById("logosiso").style.fontSize = "25px";
//   } else {
//     document.getElementById("novobar").style.padding = "10px 10px";
//     document.getElementById("logosiso").style.fontSize = "10px";
//     document.getElementById("logosiso").style.width = "180px";
//   }
// }