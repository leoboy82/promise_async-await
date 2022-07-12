//import { Console } from 'console';
import fetch from 'node-fetch';


// utilizando o fetch de forma tradicional
// function main(){
//     console.log('main()');
//     const user = 'leoboy82';
//     const apiUrl = 'https://api.github.com'
//     fetch(`${apiUrl}/users/${user}`)
//         .then((response) => {
//             return response.json();
//         }).then((user) => {
//             console.log(user.name); 
//         })
// }

//O codigo abaxo retorna as mesmas informações que o anterior. Porem
//utilizando o comando (async-await), por esse motivo melhor refatorado

// async function main(){
//     const user = 'leoboy82';
//     const apiUrl = 'https://api.github.com';
//     const response = await fetch(`${apiUrl}/users/${user}`);
//     const githubUser = await response.json();
//     //console.log(githubUser.name);
// }


//Esse exemplo retorna duas request da api 
// Para que o codigo rode corretamnete deve colocar o userName de uma outra conta do github

// async function main(){
//     const user = 'leoboy82';
//     const user2 = 'leoboy82';
//     const apiUrl = 'https://api.github.com';
//     const response = await fetch(`${apiUrl}/users/${user}`);
//     const response2 = await fetch(`${apiUrl}/users/${user2}`);
//     const githubUser = await response.json();
//     const githubUser2 = await response2.json();
//     console.log(`Leandro ID: ${githubUser.id}`);
//     console.log(`Leandro ID: ${githubUser2.id}`);

// }  


//o codigo abaixo retorna duas request trazendo os mesmos dados que o anterior.
//Porem as requestes estão sendo execultadas em paralelo possibilitando assim
//uma melhor performace na execução do mesmo.
//Trabalhando com (promise e async-await)

// async function main(){
//     const user = 'leoboy82';
//     const user2 = 'leoboy82';
//     const apiUrl = 'https://api.github.com';
//     const promise = fetch(`${apiUrl}/users/${user}`);
//     const promise2 = fetch(`${apiUrl}/users/${user2}`);
//     const promises = await Promise.all([promise, promise2]);
//     const githubUser = await promises[0].json();
//     const githubUser2 = await promises[1].json();
//     console.log(`Leandro ID: ${githubUser.id}`);
//     console.log(`Leandro ID: ${githubUser2.id}`);

// }
// main();


/*function resolverDepoisDe2Segundos(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function adicionar1(x) {
    var a = resolverDepoisDe2Segundos(20);
    var b = resolverDepoisDe2Segundos(30);
    return x + await a + await b;
  }
  
  adicionar1(10).then(v => {
    console.log(v);  // exibe 60 depois de 2 segundos.
  });
  
  async function adicionar2(x) {
    var a = await resolverDepoisDe2Segundos(20);
    var b = await resolverDepoisDe2Segundos(30);
    return x + a + b;
  }
  
  adicionar2(10).then(v => {
    console.log(v);  // exibe 60 depois de 4 segundos.
  });
  

*/