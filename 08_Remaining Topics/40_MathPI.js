console.log(Math.PI); //3.141592653589793

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor)

// {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}
