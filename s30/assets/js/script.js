console.log("Hola");

let person = {
    nombre: "Hannah",
    edad: 16,
    cellphone: "9873456172",
}

console.log(person);
console.log(person.nombre);
console.log(person["edad"]);
console.log(person.cellphone);

person.hobbies = ["dormir", "jugar voley", "pintar", "escuchar musica"];
person.cellphone = "123456789";
person.edad = 80;
console.log(person);


let person2 = { ...person };

person2.nombre = "Mia";
person2.edad = 68;
console.log("PERSONA 2");
console.log(person2);

console.log("PERSONA 1");
console.log(person);

let heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

  console.log("ACCEDIENDO A DATOS");
  console.log(heroes.members[1].name);
  console.log(heroes.members[1].powers[2]);
  console.log(heroes.members[2].powers[4]);