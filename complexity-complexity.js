/* Example One (similar pattern to transforming API data to display to the DOM)  */

const pets = [
  {type: "Cat", sound: "Meow"},
  {type: "Dog", sound: "Woof"},
  {type: "Bird", sound: "Chirp chirp"}
];

function handlePetNoisesBefore(pets) {
  const petNoises = pets.map((pet) => {
    if (pet.type === "Cat") {
      return "Meow";
    }

    if (pet.type === "Dog") {
      return "Woof";
    }

    if (pet.type === "Bird") {
      return "Chirp chirp";
    }
  });

  return petNoises;
}

function handlePetNoisesAfter(pets) {
  return pets.map((pet) => pet.sound);
}

const before = handlePetNoisesBefore(pets);
const after = handlePetNoisesAfter(pets);

console.log({before});
console.log({after});

/* Example Two (from eslint docs)  */

function a(x) {
  if (true) {
      return x;
  } else if (false) {
      return x+1;
  } else {
      return 4; // 3rd path
  }
}

function a(x) {
  if (true) {
      return x;
  } else {
      return 4;
  }
}
