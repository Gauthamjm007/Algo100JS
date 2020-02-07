function addDigits(num){
    let sum=num.toString().split('')
    return parseInt(sum[0])+parseInt(sum[1])
}

console.log(addDigits(24))