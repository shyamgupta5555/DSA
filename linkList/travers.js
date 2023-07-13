class Node{
  constructor(value ,next){
     this.value = value
     this.next = null
  }
}


let arr =[14,25,36,98,14]

let dummy = new Node(0)
let list = dummy

for(let i=0;i<arr.length ;i++){
  let node = new Node(arr[i])
  list.next =node
  list = list.next
}

// console.log(dummy.next)


function traverse(dummy){
  let cur = dummy.next
  let count =0
  while(cur != null){
    console.log(cur.value)
    cur = cur.next
    
    count++
  }
  return count
}
console.log(traverse(dummy))
