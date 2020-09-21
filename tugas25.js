var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
data2 = data.reverse()

console.log("Sebelumnya :", data)
console.log("Ascending :", data.sort())
console.log("Descending :", data.reverse())
data2 = data.filter(function(element){
 	return element > 10
 })
console.log("Filter > 10 :",data2)