// let result = 0;

// let n = prompt('nombre');


// let i = parseFloat(n);
// // console.log(i);
// // console.log(isNaN(i));

// while (i > 0) {
//     result = result + i;
//     // console.log(result);
//     i--;
// }
// console.log(result);


/////////////


// for (let i = 1; i <= n; i++) {
//     result = result + n;    
// }

// console.log(result);


////////////


// for (let i = 1; i <= 9; i++) {
//     console.log(i + ' * ' + n + ' = ' + i * n);
// }


//////////////


// let a = 0;
// let sav = 0;

// for (let i = 1; i <= 20; i++) {
//     sav = Math.floor(Math.random() * 100);
//     console.log(sav);

//     if (a < sav) {
//         a = sav;
//         // console.log(a);
//     }

// }
//         console.log(a);

// console.log(Math.floor(Math.random() * 100));
// for (let i = 0; i < array.length; i++) {

// }




// let variable = prompt(`dis un chiffre`);

// while (variable != `t movais jack`) {
//     console.log(`try again`);
//     variable = prompt(`t movais jack`);
// }
// console.log(`wooaaaaaw !!`);


/////////////////////


// BONUS


// let pyr = 5;
// let pyrspace = 0;
// let etoile = `*`;
// let espace = ``;
// let ligne = '';

// while (pyr > 0) {
//     pyrspace = pyr;
//     espace = ``;
//     ligne = ``;
//     while (pyrspace > 0) {
//         pyrspace--;
//         espace += " ";
//     }
//     ligne += espace;
//     ligne += etoile;
//     console.log(ligne);
//     // etoile = etoile + `**`;
//     etoile += `**`;
//     // compt = compt - 1;
//     pyr--;
// }


////////////////


// *
// **
// ***
// ****
// *****
// ******


// let n = 6;

// let etoile = '*';

// for (let i = 1; i <= n; i++) {
//     console.log(etoile);
//     etoile = etoile + '*'
// }


/////////////////


//       * 
//      ** 
//     *** 
//    **** 
//   ***** 
//  ******


// let n = 10;
// let etoile = '';
// let ligne = '';
// space = '';
// for (let i = 0; i < n; i++) {
    
//     for (let z = 1; z <= n - i; z++) {
//         space = space + ' ';
//     }

//     etoile = etoile + '*';

//     ligne += space + etoile;

//     // ligne += etoile;
//     console.log(ligne);

//     space = '';
//     ligne = '';
// }


///////////////


// ******* 
// *     * fois 5 
// *******


// let n = 7;
// let savn = n
// let etoile = '*';
// let ligne = '';
// space = '';

// for (let i = 1; i <= n; i++) {
//     if (savn === n || savn === 1) {
//         for (let z = 2; z <= n; z++) {
//             etoile += '*';
//         }
//         ligne = etoile;
//     }
//     else {
//         ligne += etoile;
//         for (let i = 0; i < n - 2; i++) {
//             space += ' ';
//         }
//         ligne += space;
//         ligne += etoile;
//     }
//     console.log(ligne);
//     space = '';
//     etoile = '*';
//     ligne = '';
//     savn--;
// }


/////////////////


// CARRÉ V2.0.0


// let n = 8;

// let savn = n
// let etoile = '*';
// let ligne = '';
// let space = '';
// let Tligne = '';

// for (let i = 1; i <= n - 3; i++) {
//     if (savn == n || savn == 4) {
//         for (let z = 2; z <= n; z++) {
//             etoile += '*';
//         }
//         ligne = etoile;
//     }
//     else {
//         ligne += etoile;
//         for (let i = 0; i < n - 2; i++) {
//             space += ' ';
//         }
//         ligne += space;
//         ligne += etoile;
//     }
//     // console.log(ligne);
//     Tligne += ligne + "\n";
//     space = '';
//     etoile = '*';
//     ligne = '';
//     savn--;
// }
// console.log(Tligne);









// ******* 
// ***** 
// **** 
// *** 
// ** 
// *


// let n = 6;
// let savn = n;
// let etoile = '*';
// for (let i = 1; i <= n; i++) {
//     for (let i = 0; i < savn; i++) {
//        etoile += '*';
//     }
//     console.log(etoile);
//     etoile = '';
//     savn--;
// }


/////////////////


// ****** 
//  ***** 
//   **** 
//    *** 
//     ** 
//      *

// let n = 10;
// let savn = n;
// let Rsavn = 1
// let etoile = '';
// let ligne = '';
// space = '';
// for (let i = 1; i <= n; i++) {
//     for (let i = 1; i < Rsavn; i++) {
//         space += ' ';
//     }
//     ligne += space;
//     for (let z = 1; z <= savn; z++) {
//         etoile += '*';
//     }
//     ligne += etoile;


//     console.log(ligne);
//     etoile = '';
//     space = '';
//     ligne = '';
//     savn--;
//     Rsavn++;
// }



///////////////


// let variable = prompt(`dis un chiffre`);

// while (variable != `t movais jack`) {
//     console.log(`try again`);
//     variable = prompt(`t movais jack`);
// }
// console.log(`wooaaaaaw !!`);


// let variable = prompt(`dis un chiffre`);

// while (variable != 9) {
//     if (variable < 9) {
//         variable = prompt("c'est plus!");
//     }
//     else if (variable > 9){
//         variable = prompt("c'est moins!");
//     }
// }
// console.log(` ooooh oui oui ouiii !!!`);
