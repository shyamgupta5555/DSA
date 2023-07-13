
let f = 5

function factorial(f){

  if(f == 0)return 1
  return f * factorial(f-1)
}
console.log(factorial(f))