// CALLBACK
// function pegadados(funçao ) {
//     setTimeout (function() {
//     const dados = {
//         nome: 'andre'
//     }
//     funçao (dados);
//     }, 2 * 1000);
// }
// pegadados (function(dados) {
//     console.log('dados:', dados)
// });
// console.log('1');
// console.log('2');
 // usar no site http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcGVnYWRhZG9zKGZ1budhbyApIHsKICAgIHNldFRpbWVvdXQgKGZ1bmN0aW9uKCkgewogICAgY29uc3QgZGFkb3MgPSB7CiAgICAgICAgbm9tZTogJ2FuZHJlJwogICAgfQogICAgZnVu52FvIChkYWRvcyk7CiAgICB9LCAyICogMTAwMCk7Cn0KcGVnYWRhZG9zIChmdW5jdGlvbihkYWRvcykgewogICAgY29uc29sZS5sb2coJ2RhZG9zOicsIGRhZG9zKQp9KTsKY29uc29sZS5sb2coJzEnKTsKY29uc29sZS5sb2coJzInKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


 // PROMISES
 function pegadDados() {
     const resultado = fetch('../estadoscidades/estados-cidades.json')
     .then((res) => {
         console.log(res);
     })
     console.log(resultado);
}
