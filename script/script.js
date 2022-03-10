'use strict'

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
  
  
    
        
    
   
   let nsubs = document.getElementById("nsubs");
   let secradio = document.getElementById('secradio');
   let subradio = document.getElementById('subradio');
   let estates = document.getElementById('estates');
   let estados = document.getElementById('estados');
   let cidades = document.getElementById('cidades');
   

    
   document.body.addEventListener('change', function(e){
       let target = e.target;
       switch (target.id) {

           
           case 'subradio':
               // nsubs.style.display = "none";
               // estados.style.display = "none";
               // estates.style.display = "inline-block";
               // cidades.style.display = "inline-block";
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
                   // nsubs.style.display = "block";  
                   // estados.style.display = "block";
                   // estates.style.display = "none";
                   // cidades.style.display = "none";
       
                   nsubs.classList.remove('d-none');
                   nsubs.classList.add('d-block');
       
                   estados.classList.remove('d-none');
                   estados.classList.add('d-block');
       
                   estates.classList.remove('d-block');
                   estates.classList.add('d-none');          
       
                   cidades.classList.remove('d-bloc');
                   cidades.classList.add('d-none');
               break
               
               
            }
        })
        
        // const apiUrl = "https://gist.githubusercontent.com/letanure/3012978/raw/78474bd9db11e87de65a9d3c9fc4452458dc8a68/estados-cidades.json";
    // let dados = await fetch(apiUrl).then(res => {
    //     return res.json()
    // })
    // .catch(err => console.error('n deu', err));
    // console.log(dados);
    // dados.estados.forEach(estado => {
    //     console.log(estado.sigla);
    //     console.log(estado.cidades);
    //      estado.cidades.forEach(cidade => {
    //         console.log(cidade)
    //     })
    // });



//        getestado();  
//     async function getestado(){
//     let dados = await fetch('../estadoscidades/estados-cidades2.json').then(res => {
//             return res.json()

//         })
//         .catch(err => console.error('n deu', err));

//         // console.log(dados);
//         const rondonia = dados.states[11];
//         console.log(rondonia, 'deu boa')
//         };
 
//     async function getcidade(){
//     let cidades = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios')
//     .then(res => {
//         return res.json()
//     })
//     .catch(err => console.error('n deu', err));
//     console.log(cidades.states[11]);
    
// }


// function buscaCidades(e){
//     document.querySelector("#cidade").innerHTML = '';
//     var cidade_select = document.querySelector("#cidade");
 
//     var num_estados = json_cidades.estados.length;
//     var j_index = -1;
 
//     // aqui eu pego o index do Estado dentro do JSON
//     for(var x=0;x<num_estados;x++){
//        if(json_cidades.estados[x].sigla == e){
//           j_index = x;
//        }
//     }
 
//     if(j_index != -1){
   
//        // aqui eu percorro todas as cidades e crio os OPTIONS
//        json_cidades.estados[j_index].cidades.forEach(function(cidade){
//           var cid_opts = document.createElement('option');
//           cid_opts.setAttribute('value',cidade)
//           cid_opts.innerHTML = cidade;
//           cidade_select.appendChild(cid_opts);
//        });
//     }else{
//        document.querySelector("#cidade").innerHTML = '';
//     }
//  }

