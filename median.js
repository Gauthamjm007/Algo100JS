function median(num){
    const isEven=num%2===0
    return isEven?num[num.length/2-1]:num[Math.floor(num.length/2)]
}

console.log(median([2,3,4,5,6]))