'use strict'

//const getCount = str => str.match(/[aeiou]/ig) == null ? 0 : str.match(/[aeiou]/g).length
console.log(getCount("my pyx"));

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length // || -> si esto no se cumple, paso a lo siguiente ('o')
}

  // Hay que tener cuidado, porque si dejo espacios tras la coma, lo admite como un espacio:([a,e,i,o,u, ])
  // Mucho cuidado, porque la verdadera forma es [aeiou], sino también detecta las comas