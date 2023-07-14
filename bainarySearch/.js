//   search  in rotated array

let num = [8,21,35,45,69,55]

let number = 8


var findNumber = function (num) {
  let n = num.length;
  let low = 0;
  let high = n - 1;

while(low < high){
  let mid = Math.ceil((low + high)/2)
  if(num[mid] == number){
    return mid
  }

  if(num[mid] > number){
    high = mid-1
  }else{
    low = mid+1
  }
  
}

  return "-1"
};

console.log(findNumber(num))

