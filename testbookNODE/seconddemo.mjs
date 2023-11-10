let studentInfo = {
    name: 'Peter',
    uid: 48,
    color: 'Emerald'
}


export function hardwork() {
    console.log('hardwork');
    return 0
}

 export  {studentInfo,smartwork}
 
console.log (studentInfo, hardwork())
export default hardwork   // this default will run when you will give function name in another linked file but that function name will be wrong or does not exist so node will think tht you had done some mistake and it will show default function and execute it
 