module.exports = function reverse (n) {
  if(n<0){
    let res = Math.abs(n)
    res = String(res).split('').reverse().join('')
    return res
  }
  n = String(n).split('').reverse().join('');
  return n;
}
