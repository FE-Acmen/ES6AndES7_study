// json 数组格式
let json = {
  '0':'zlp',
  '1':'zlp',
  '2':'zlp',
  length: 3
}
// Array.from方法
let arr = Array.from(json)
console.log(arr)

// Array.of方法
console.log(Array.of('zlp','zlp1'))

// Array.find方法
console.log([1,2,3,4,5].find(function(value,index,arr){
  return value > 4
}))

// Array.fill方法
console.log(['zlp','zlp1','zlp2'].fill('yang',1,3))

// Array 循环 for...of
let items = ['zlp','zlp1','zlp2']
for (let [index,val] of items.entries()){
  console.log(index+':'+val)
}

// entries
let arr1 = ['zlp','zlp1','zlp2']
let list = arr1.entries()
console.log(list.next().value)
console.log('-----------------')
console.log(list.next().value)
console.log('****************')
console.log(list.next().value)

// 
function add(a=2,b=1){
  // if(a==0){
  //   throw new Error('A is Error')
  // }
  return a + b
}

console.log(add.length)

var add1=(a,b=1) => a+b
console.log(add1(1,2))

// 对象的函数解构
let obj = {
  a:'zlp',
  b:'张柳平'
}
function fun({a,b,c='web'}){
  console.log(a,b,c)
}
fun(obj)

// 数组解构
let arr2 = ['zlp','张柳平','前端']
function fun1(a,b,c){
  console.log(a,b,c)
}
fun1(...arr2)
// in的用法
let obj1 = {
  a:'zlp',
  b:'张柳平'
}
console.log('a' in obj1)
// 数组 in
let arr4 = [,,,,]
console.log(arr4)
console.log(0 in arr4)

// 数组遍历 forEach
arr.forEach((value,index)=>{
  console.log(index,value)
})
arr.filter(x=>{console.log(x)})
arr.some(x=>{console.log(x)})
console.log(arr.map(x=>console.log(x)))
console.log(arr.join('|'))