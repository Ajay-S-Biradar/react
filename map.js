// const arr = [1,2,3,4,5];

// function f(x){
//     return 2*x;
// }

// const out = arr.map(f);

// console.log(out);

const users = [
    {firstname:"ajay", lastname:"biradar"},
    {firstname:"abhi", lastname:"GD"},
    {firstname:"sag", lastname:"saha"},
    {firstname:"ayu", lastname:"singh"},
]

function fun(x){
    return (x.firstname + x.lastname);
}

const out = users.map(fun);


