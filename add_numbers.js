function add2Num(a,b){
    return a+b
}

console.log(add2Num(98050,395309))

function addAll(...arr){
    let result=0
    arr.forEach((ele)=>{result+=ele})
    return result
}

console.log(addAll(1,2,3,6,8,9))