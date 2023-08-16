const getRandomNumber = (min, max) => {
  var random = Math.floor(Math.random() * (max - min + 1) + min)
  return random;
};

const randomPets = (pets) => {
  // console.log(pets)
  let arr = []
  for (i = 0; i < 3; i++) {
    const num = getRandomNumber(0, pets.length-1)
    arr.push(pets[num])
    pets.splice(num, 1)
  }
  return arr
}

module.exports = randomPets;