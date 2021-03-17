

// let tab = [];
// let tabMax = [];
// let sav = 0;
// let a = 0;
// let b = 100;
// let n = prompt('jajajajaja');
// let minI = 0;

// for (let toto = 0; toto < n; toto++) {
//     tab[toto] = Math.floor(Math.random() * 100) + 1;
//     sav = tab[toto];

//     if (a < sav) {
//         a = sav;
//     }
//     if (b > sav) {
//         b = sav;
//     }
// }
// // console.log(tab);

// console.log(a);
// console.log(b);
// for (let i = 0; i < n; i++) {

//     for (let titi = 0; titi < n; titi++) {
//         if (tab[titi] == a && tab[titi] != 0) {
//             // tabMax[minI] = tab[titi];
//             tabMax.push(tab[titi]);
//             tab[titi] = 0;
//             a = 0;
//             // minI++;
//         }
//     }
//     for (let j = 0; j < n; j++) {
//         sav = tab[j];
//         if (a < sav) {
//             a = sav;
//         }
//     }
// }
// console.log(tabMax);



////////////////





let tab = [];
let tabMax = [];
let array = [];
let sav = 0;
let a = 0;
let b = 100;
let n = prompt('jajajajaja');
let m = prompt('cherche');
// let minI = 0;

for (let toto = 0; toto < n; toto++) {
    tab[toto] = Math.floor(Math.random() * 10) + 1;
    sav = tab[toto];

    if (a < sav) {
        a = sav;
    }
    if (b > sav) {
        b = sav;
    }
}

console.log(a);
console.log(b);
console.log(tab);

// for (let petitTrain = 0; petitTrain < n; petitTrain++) {


//     for (let moyenTrain = 0; moyenTrain < n; moyenTrain++) {  
//              if (tab[moyenTrain] == a && tab[moyenTrain] != 0) {
//                  tabMax.push(tab[moyenTrain]);
//                  a = 0;     
//                  tab[moyenTrain] = 0;     
//              }
//     }    
//     for (let grosTrain = 0; grosTrain < n; grosTrain++) {
//         sav = tab[grosTrain];
//         if (a < sav) {
//             a = sav;
//         }        
//     }
// }
// console.log(tabMax);


/////////////////


// for (let i = 0; i < n; i++) {

//     for (let titi = 0; titi < n; titi++) {
//         if (tab[titi] == m && tab[titi] != 0) {
//             tabMax.push(tab[titi], titi);
//             tab[titi] = 0;
//             m = 0;
//         }
//     }
// }
// console.log(tabMax);
console.log(tab.findIndex(i => i == 5));

// for (let index = 0; index < array; index++) {
//     for (let index = 0; index < ; index++) {
//         const element = array[index];

//     }    
// }
