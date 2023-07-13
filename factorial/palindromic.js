let str = "madam"

function palindromic(str){
  let start = 0
  let end = str.length-1

  while(start < end){
    console.log(str[start],str[end])
    if(str[start] != str[end]){
      return "not palindromic"
    }else{
      start++
      end--
    }
  }
  return "palindromic"
}
console.log(palindromic(str))