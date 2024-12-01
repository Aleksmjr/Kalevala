function sayHi(name) {
  console.log(`Hello ${name}`);
}
let users = ['lol', 'kek', 'cheburek', 'leha', 'zaebal'];
let usersLength = users.length;
console.log(usersLength);

for (let i = 0; i <= users.length - 1; i++) {
  console.log(users[i]);
  sayHi(users[i]);
}
