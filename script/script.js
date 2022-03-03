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
    const sec = document.getElementById('sec');
    const estado= document.getElementById("estado");
    const secradio = documet.getElementById("secradio");
    const subradio = document.getElementById("subradio");

function seccional() {
    
    sec.innerHTML = "Nº de Subseções";
    estado.innerHTML = "Selecione seu Estado";
    

};

function subseção() {
    
    sec.innerHTML = "Selecione um Estado";
    estado.innerHTML = "Cidade";
};