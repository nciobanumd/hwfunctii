/* EX1 */

const arr = [1, 2, 3, 4, 4, 5, 5, 7, 8, 8, 10, 20, 20, 20]

const numbUnice = (arrayList) => {
    return arrayList.reduce((acc, cur) => {
        if (!acc.includes(cur)) {
            acc.push(cur)
        }
        return acc

    }, [])
}
console.log(numbUnice(arr))




/* EX 2 */

const arr1 = ['str', 'str1', 'str2', 'str3', 'str4', 'str5']
const valdeindetificat = 'str1'

function indetificarePozitie (arr, str) {
    for (let i = 1; i < arr.length; i+=2) {
        if(arr[i] === str) {
            return true
        }
    
    }
    return false 

}
/* console.log(indetificarePozitie(arr1, valdeindetificat)); */




/* EX.3 */

/* console.log(arr1.indexOf(valdeindetificat) > 3) */



/* EX.4 */

const listaObj1 = [
{name: 'Boris', age: 30},    
{name: 'Alex', age: 32},       
{name: 'Vasile', age: 31}
]     

const obj2 = {name: 'Vasile', age: 31}

const elimObj = (lista, objElim) => {
    return lista.filter(obj => !Object.keys(objElim).every(key => obj[key] === objElim[key] ))
}

/* console.log(elimObj(listaObj1, obj2)) */




/* EX.5 */


function construtiePatrat(parametri) {
    if(typeof parametri !== 'number' || parametri <= 0) {
     return   
    }

    for(let i = 0; i < parametri; i++) {
        let latura = '';
        for (let j = 0; j < parametri; j++) {
            latura += '*'
        }
        console.log(latura)
    }
    
}

/* construtiePatrat(3) */


/* EX.6 */



const compareitem = (arr) => {
    let rezult = arr.reduce((acc, cur, index) => {
        
        const itemdiferite = index < arr.length - 1 && cur !== arr[index + 1]
        if(itemdiferite) {
            acc = false
        
        }
        return acc

    }, true)

    return rezult
}

const array = [1, 1, 1, 1, 1]
const array1 = [1, 2, 1, 2, 1]
/* console.log(compareitem(array));
console.log(compareitem(array1)); */

