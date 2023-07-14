
class linkedList {
  constructor(data, next) {
    this.value = data == undefined ? null : data
    this.next = next == undefined ? null : next
  }
}

let arr =[1,2,4]
let arr2 = [1,3,4]

function createLinkList(arr) {
  let dummy = new linkedList(0)
  let pointer = dummy
  for (let i = 0; i < arr.length; i++) {
    let node = new linkedList(arr[i])
    pointer.next = node
    pointer = pointer.next
  }
  return dummy.next
}
let list1 = createLinkList(arr)
let list2 = createLinkList(arr2)


var mergeTwoLists = function(list1, list2) {
  
  let h1= list1 ;//-9-3
  let h2= list2 ;//5-7
  let list3= new linkedList(0) ;//0-
  let h3=list3 ;

 while(h1 != null && h2  != null){
  
  if(h1.value < h2.value){
    h3.next = h1
    h1 = h1.next
  }else{
    h3.next = h2
    h2 = h2.next
  }
  h3 = h3.next
 }

 while( h2 != null){
  h3.next = h2
  h3 = h3.next
  h2 = h2.next
 }

 while(h1 != null){
  h3.next = h1
  h3 = h3.next 
  h1 = h1.next
 }
 return list3.next;
};

console.log(mergeTwoLists(list1,list2))
