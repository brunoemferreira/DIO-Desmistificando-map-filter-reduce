const pets = [
  {
    name: 'rex',
    type: 'dog',
    age: 10
  },
  {
    name: ',iau',
    type: 'cat',
    age: 2
  },
   {
    name: 'gulp',
    type: 'fish',
    age: 1
  },
]

// ( Filter ) Filtrar pets que tem menos de 5 anos 
const newPets = pets.filter((pet) => { 
  return pet.age < 5
});
console.log(newPets);



console.log(pets);
