
class Node{
  constructor(value,next ){
    this.name = value,
    this.next = null
  }
  }
  
  let arr =[12,32,45,74,25,36]
  let s = new Node()
  let d = s
  for(let i =0 ;i<arr.length ;i++){
     let node = new Node(arr[i])
     d.next = node
     d = d.next
  }
  // console.log(s.next)
  let head = s.next


function middleElement(head){
  let fast = head
  let slow = head

  while(fast!= null && fast.next != null){
    fast = fast.next.next
    slow = slow.next
    
  }
return slow

}
  
console.log(middleElement(head))

