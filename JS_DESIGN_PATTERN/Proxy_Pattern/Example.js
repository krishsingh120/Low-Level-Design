const user = {
  name: "krish",
  age: 21,
  email: "krish@admin.com",
};

const handler = {
  get(target, property) {
    console.log("calling original object through proxy");
    return target[property];
  },
  set(target, property, value) {
    console.log("calling original object through proxy");
    target[property] = value;
    return true;
  },
};

const proxyUser = new Proxy(user, handler);

console.log(proxyUser.name);
console.log(proxyUser.email);

