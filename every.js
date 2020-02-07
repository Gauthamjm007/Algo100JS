function _every(a, b) {

    for(let i=0;i<a.length;i++){
        console.log(b(a[i]),i)
    }
}

console.log(
  _every([1, 2, 3, 4, 5], function(val) {
    return val > 0;
  })
);
