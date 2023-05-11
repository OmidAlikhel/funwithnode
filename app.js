// const bar = () => console.log("bar");
const baz = () => console.log("baz");

const foo = () => {
  console.log("foo");
  // setTimeout(bar, 2000);
  setTimeout(() => {
    console.log("bar");
  }, 2000);

  // bar();
  baz();
};
foo();

// first it was task number 1 2 3
// but after implementing event loop task number 1 3 2  as task 2 has 2 sec delay.
//  keeping track of function in call stack and removing the one done is called event loop
//  call stack is the call where the order of functions exist.
