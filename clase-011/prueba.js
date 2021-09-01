let a = [{"id":1},{"id":2},{"id":3},{"id":4}]
console.log(a)
a.splice(a.findIndex(e => e.id === 3),1)
console.log(a)