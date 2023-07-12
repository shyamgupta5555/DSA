class Node{
constructor(value,next ){
  this.name = value,
  this.next = null
}
}

let arr =[4,2,6,8,9]
let s = new Node()
let d = s
for(let i =0 ;i<arr.length ;i++){
   let node = new Node(arr[i])
   d.next = node
   d = d.next
}
console.log(s.next)
