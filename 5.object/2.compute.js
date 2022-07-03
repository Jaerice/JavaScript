const obj = {
  name: 'Jae',
  age: 20,
};
// When you want to access a property statically
obj.name;
obj.age;

// When you want to dynamically access a property
// use obj[] bracket
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, 'name'));

// add key: [] dynamically access a property
function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, 'sex', 'male');
addKey(obj, 'job', 'engineer');
console.log(obj);

// delete operator
function deleteKey(obj, key) {
  delete obj[key];
}
deleteKey(obj, 'job');
console.log(obj);
