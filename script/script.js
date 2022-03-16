'use strict'

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // navbar_height = document.querySelector('.navbar');
            // document.body.style.paddingTop = navbar_height;

        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            document.body.style.paddingTop = 0;
        }
    });


});






let nsubs = document.getElementById("nsubs");
let secradio = document.getElementById('secradio');
let subradio = document.getElementById('subradio');
let estates = document.getElementById('estates');
let estados = document.getElementById('estados');
let cidades = document.getElementById('cidades');



document.body.addEventListener('change', function (e) {
    let target = e.target;
    switch (target.id) {


        case 'subradio':

            nsubs.classList.remove('d-block')
            nsubs.classList.add('d-none');

            estados.classList.remove('d-block')
            estados.classList.add('d-none');

            estates.classList.remove('d-none');
            estates.classList.add('d-block')

            cidades.classList.remove('d-none');
            cidades.classList.add('d-block')

            break

        case 'secradio':


            nsubs.classList.remove('d-none');
            nsubs.classList.add('d-block');

            estados.classList.remove('d-none');
            estados.classList.add('d-block');

            estates.classList.remove('d-block');
            estates.classList.add('d-none');

            cidades.classList.remove('d-block');
            cidades.classList.add('d-none');
            break


    }
})




getestado();
let selectestados = document.getElementById("selectestados");
let selectestates = document.getElementById("selectestates")


async function getestado() {
   
    let dados = await fetch('../estadoscidades/estados-cidades.json').then(res => {
        return res.json()
    })
        .catch(err => console.error('n deu', err));

    dados.estados.forEach(function (estado) {
        let option = document.createElement("option");
        let selectcidades = document.getElementById('selectcidades')
        option.text = estado.nome;
        option.value = estado.sigla;
        selectestates.add(option, selectestates[0]);

        selectcidades.addEventListener('onchange', () => {
            option.text = estado.cidades;
            console.log(estado.cidades);
        })



             
    })}

   // QUANDO MUDAR O SELECT ESTADO, PUXAR CIDADE COM A SIGLA DO ESTADO.

   
    // }

    // let selectcidades = document.getElementById('selectcidades');
    // selectcidades.onchange = function(){ trocarcidade()};
    // function trocarcidade(){
    //     let option = document.createElement("option");
    //     option.text = 
    



    

    
          




   
    
 







