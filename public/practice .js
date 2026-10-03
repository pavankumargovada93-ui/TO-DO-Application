// let str="hello";
// let result=str.split('').reverse().join('');
// console.log(result)

// const arr=[1,2,2,3]
// const dup=arr.filter((v,i)=>arr.indexOf(v)!==i)
// console.log(dup)
// let pal="mam"
// const ispal= pal.split('').reverse().join('');
// if(pal==ispal){
//     console.log(true)
// }else{
//     console.log(false)
// }

const count={};
for (let c of "hello")
     count[c]=(count[c]||0)+1;
   
console.log(count);