const prises = [12.5, 33, 53, 100]
// const newPrises = []
// for (const prise of prises) {
//     newPrises.push(prise * 0.7)
// }
const newPrises = prises.map(prise => prise * 0.7)
console.log(newPrises)

const inventors = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    passed: 1955,
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    passed: 1727,
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    passed: 1642,
    }]
    const names = inventors.map(inventor => inventor.name)
    console.log(names)