let arr = [4,8,9,23,45,30]

class Node{
  constructor(value ,next){
    this.value = value
    this.next = null
  }
}
let dummy = new Node(0)
let list = dummy
for(let i =0;i<arr.length ;i++){
  let node = new Node(arr[i])
  list.next = node
  list = list.next
}

// hame Nth node delete karna  hai
let d = 3
let head = dummy.next


function nodeDelete(head,d){
  if(d == 0)return head.next
  if(head == null)return head
  
for(let i =0 ;i<d;i++){
 if(head.next == null)return head
  head = head.next

}
head.next = head.next.next

return head
}
let s = nodeDelete(head , 9)
console.log(s)


