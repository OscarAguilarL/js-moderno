const helloWorld = () => {
  const hello = 'Hello';
  console.log(hello);
};

helloWorld();
console.log(hello);

var scope = 'im global';
const functionScope = () => {
  var scope = 'I am just a local';
  const func = () => {
    return scope;
  };
  console.log(func());
};
functionScope();
console.log(scope);
