// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push('Ralph')
}

function destructivelyPrependDriver(name) {
  drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift()
}

function appendDriver(name) {
  const driversCopy = drivers.slice();
  driversCopy.push("Broom")
  console.log(driversCopy)
  console.log(drivers)
}

function prependDriver(name){
  const driversCopy = drivers.slice();
  driversCopy.unshift("Arnold")
  console.log(driversCopy)
  console.log(drivers)
}

