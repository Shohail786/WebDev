// let myArray=[5,"abc",10.5,20];
// myArray.splice(2,0,"xyz",50,10);
// console.log(myArray);

let myArray=[5,10,13,56,100];
// let itemIndex=myArray.findIndex(function(eachItem){
//     console.log(eachItem);
// })
// let itemIndex=myArray.findIndex(function(eachItem){
//     if(eachItem===13)
//     return true;
//     else return false;
// })
// console.log(itemIndex);

console.log(myArray.join("."));

let customerData=[
    {
        name:"Rahul",
        id:101,
    },
    {
        name:"Piyush",
        id:102,
    },
    {
        name: "kartik",
        id: 103,
    },
];

let index=customerData.findIndex(function(eachItem){
    if(eachItem.id==102)
    return true;
    else return false;
});

console.log(index);

